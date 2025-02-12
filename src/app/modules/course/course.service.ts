import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';

import { TCourse } from './course.interface';
import { Course } from './course.model';
import { CourseSearchableFields } from './course.constent';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find(),
    // .populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    'preRequisiteCourses.course',
  );
  return result;
};

const updateCourseIntoDB = async (id:string, payload:Partial<TCourse>)=>{
  const {preRequisiteCourses, ...courseRemanigData} = payload;
  const updateBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemanigData,
    {
      new:true,
      runValidators:true
    }
  );
  return updateBasicCourseInfo;
}

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
};