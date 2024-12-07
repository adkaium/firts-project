import { Request, Response } from "express";
import { userService } from "./user.service";
// import userValidationSchema from "./user.validation";



const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student:studentData } = req.body;

    // const zodparseData = userValidationSchema.parse(studentdata);
    const result = await userService.createNewStudent(password,studentData);
    res.status(200).json({
      successful: true,
      Data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went to wrong',
      Data: error.details,
    });
  }
};


export const userContorller = {
    createStudent
}