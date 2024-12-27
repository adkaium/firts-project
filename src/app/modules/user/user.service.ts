import config from '../../config';
import { TStudent } from '../student/student.Interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/student.modle';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { generatestudentId } from './user.utils';
import mongoose from 'mongoose';
import AppError from '../../errors/appErro';

//creat student
const createNewStudent = async (password: string, payload: TStudent) => {
  // create object
  const userData: Partial<TUser> = {};

  //    set password in created new obj.
  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  const admissionSemester = (await AcademicSemester.findById(
    payload.admissionSemester,
  )) as TAcademicSemester;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generatestudentId(admissionSemester);

    const newUser = await User.create([userData], { session });

    //   create a student
    if (!newUser.length) {
      throw new AppError(401, 'User Create Faild');
    }
    (payload.id = newUser[0].id), (payload.user = newUser[0]._id);

    const newStudent = await Student.create([payload], { session });
    if (!newStudent) {
      throw new AppError(401, 'Student Create Faild');
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};


export const userService = {
  createNewStudent,
};
