import mongoose from 'mongoose';
import { Student } from './student.modle';
import AppError from '../../errors/appErro';
import { User } from '../user/user.model';
import { TStudent } from './student.Interface';

// get all student
const getAllStudent = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  // console.log(result);
  return result;
};

// get one student by Id:
const getSingelStudent = async (id: string) => {
  const result = await Student.findOne({id})
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  return result;
};

// update data by using patch
const updateData = async (id: string, payload: Partial<TStudent>) => {

  const result = await Student.findOneAndUpdate({id}, payload, {
    new: true,
    runValidators: true,
  });
  // console.log(result);
  return result;
};

const deletedStudentFromDB = async (id: string) => {
  const isUsserExists = await Student.isUserExists(id);
  if (!isUsserExists) {
    throw new AppError(400, 'Student Not Found');
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    
    const deletSutdent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletSutdent) {
      throw new AppError(400, 'Studnet Not Deleted');
    }

    const userDeleted = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!userDeleted) {
      throw new AppError(400, 'User Not Deleted');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletSutdent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const studentService = {
  getAllStudent,
  getSingelStudent,
  updateData,
  deletedStudentFromDB,
};
