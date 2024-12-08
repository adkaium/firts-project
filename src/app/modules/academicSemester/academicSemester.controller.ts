import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../utilits/sendResponse';
import { catchAsync } from '../../utilits/catchAsync';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoDb(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester is created Successfully',
    data: result,
     
  });
 
});

export const AcademicSemesterContorller = {
  createAcademicSemester,
};
