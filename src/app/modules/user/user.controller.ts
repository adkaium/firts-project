import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utilits/sendResponse";
// import httpStatus from "http-status"
// import userValidationSchema from "./user.validation";



const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { password, student:studentData } = req.body;

    // const zodparseData = userValidationSchema.parse(studentdata);
    const result = await userService.createNewStudent(password,studentData);
    // res.status(200).json({
    //   successful: true,
    //   Data: result,
    // });
    sendResponse(res, {
      statusCode:200,
      success:true,
      message:"Student is created Successfully",
      data:result
    })
  } catch (error) {
    next(error)
  }
};


export const userContorller = {
    createStudent
}