import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utilits/sendResponse";
import { catchAsync } from "../../utilits/catchAsync";




const createStudent = catchAsync(async (req, res) => 
 {
  const { password, student: studentData } = req.body;
 const result = await userService.createNewStudent(password, studentData)
sendResponse(res, {
  statusCode: 200,
  success: true,
  message: 'Student is created Successfully',
  data: result,
})}
)
;


export const userContorller = {
    createStudent
}