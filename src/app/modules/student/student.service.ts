import mongoose from 'mongoose';
import { Student } from './student.modle';
import AppError from '../../errors/appErro';
import { User } from '../user/user.model';
import { TStudent } from './student.Interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constent';

// get all student
const getAllStudent = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  ).search(studentSearchableFields)
  .filter()
  .sort()
  .paginate()
  .fields();


  const result = await studentQuery.modelQuery;
  return result;
  
};

// get one student by Id:
const getSingelStudent = async (id: string) => {
  const result = await Student.findOne({ id })
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
  const { name, guardian, localGuardian, ...rest } = payload;
  const modifiUpdateData: Record<string, unknown> = { ...rest };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiUpdateData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiUpdateData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiUpdateData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiUpdateData, {
    new: true,
    runValidators: true,
  });
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
