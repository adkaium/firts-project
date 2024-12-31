// import { NextFunction, Request, RequestHandler, Response } from 'express';
// import { studentValidationSchema } from './student.validation';
import { studentService } from './student.service';
import { catchAsync } from '../../utilits/catchAsync';
import sendResponse from '../../utilits/sendResponse';

const getAllSutdentfromDb = catchAsync(async (req, res, next) => {
  const result = await studentService.getAllStudent(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Student Retrive Successfully',
    data: result,
  });
});

// get single student by id
const singelStudentById = catchAsync(async (req, res, next) => {
  const id = req.params.studentId;
  const result = await studentService.getSingelStudent(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: ' Student Retrive Successfully',
    data: result,
  });
});

// get update data
const singelDataUpdate = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  console.log(studentId, student);
  const result = await studentService.updateData(studentId, student);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student Data Updated Successfully',
    data: result,
  });
});

const deletedStudent = catchAsync(async (req, res) => {
  const id = req.params.studentId;
  const result = await studentService.deletedStudentFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student deleted Successfully',
    data: result,
  });
});

export const studentControl = {
  getAllSutdentfromDb,
  singelStudentById,
  singelDataUpdate,
  deletedStudent,
};
