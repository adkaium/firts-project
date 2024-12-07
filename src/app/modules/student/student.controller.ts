import { NextFunction, Request, RequestHandler, Response } from 'express';
// import { studentValidationSchema } from './student.validation';
import { studentService } from './student.service';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAllSutdentfromDb = catchAsync(async (req, res, next) => {
  const result = await studentService.getAllStudent();
  res.status(200).json({
    successful: true,
    data: result,
  });
});

// get single student by id
const singelStudentById = catchAsync(async (req, res, next) => {
  const id = req.params.studentId;
  const result = await studentService.getSingelStudent(id);
  res.status(200).json({
    successfull: true,
    data: result,
  });
});

// get update data
const singelDataUpdate = catchAsync(async (req, res, next) => {
  const id = req.params.studentId;
  const doc = req.body;
  const result = await studentService.updateData(id, doc);
  result;
  res.status(200).json({
    success: true,
  });
});

export const studentControl = {
  getAllSutdentfromDb,
  singelStudentById,
  singelDataUpdate,
};
