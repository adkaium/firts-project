import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../utilits/sendResponse';
import { catchAsync } from '../../utilits/catchAsync';
import { AcademicSemester } from './academicSemester.model';

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

const getAllSemester = catchAsync(async (req,res)=>{
  const result = await AcademicSemesterService.getAllAcademicSemestersFromDB();
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get All Semester is Successfully",
    data:result,
  })
})

const getSingleSemester = catchAsync(async(req,res)=>{
  const {semesterId} = req.params;

  const result = 
   await AcademicSemesterService.getSingelSemesterFromDB(semesterId) ;

   sendResponse(res,{
    statusCode:200,
    success:true,
    message: "get data Successfully",
    data:result
   })
});

const updateAcademicSemester = catchAsync(async(req,res)=>{
  const {semesterId} = req.params;
  const result = await AcademicSemesterService.updateDataIntoDB(semesterId,req.body);

  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"Semester Update Successfully",
    data:result,
  })
})

export const AcademicSemesterContorller = {
  createAcademicSemester,
  getAllSemester,
  getSingleSemester,
  updateAcademicSemester
};
