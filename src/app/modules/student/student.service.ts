import mongoose from 'mongoose';
import { Student } from './student.modle';
import AppError from '../../errors/appErro';
import { User } from '../user/user.model';
import { TStudent } from './student.Interface';

// get all student
const getAllStudent = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  const searchableFields = ['email', 'name.firstName', 'presentAddress'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const studentSearchQuery = Student.find({
    $or: searchableFields.map((filed) => ({
      [filed]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort','limit','page','fields'];
  excludeFields.forEach((el) => delete queryObj[el]);

  const filterQuery = studentSearchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  let sort = '-createdAt';

  if (query.sort) {
    sort = query.sort as string;
  }

  const sortQuery = filterQuery
    .sort(sort)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  
  let limit = 1;
  let page = 1;
  let skip = 0;
   if (query.limit) {
     limit = Number(query.limit);
   }
  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }
   
  const paginateQuery = sortQuery.skip(skip);

  const limitQuery =  paginateQuery.limit(limit);

  let fields = '__v';

  if(query.fields){
    fields =(query.fields as string).split(',').join(' ');

  }

  const selectQuery = await limitQuery.select(fields);

  return selectQuery;
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
