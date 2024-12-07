import { NextFunction, Request, Response } from 'express';
// import { studentValidationSchema } from './student.validation';
import { studentService } from './student.service';




const getAllSutdentfromDb = async (req: Request, res: Response,   next:  NextFunction) => {
  try {
    const result = await studentService.getAllStudent();
    res.status(200).json({
      successful: true,
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

// get single student by id
const singelStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.studentId;

    const result = await studentService.getSingelStudent(id);
    res.status(200).json({
      successfull: true,
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

// get update data
const singelDataUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.studentId;
    // const doc= {$set:req.body}  for patch

    // for put operatin
    const doc = req.body;

    const result = await studentService.updateData(id, doc);
    result;
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error)
  }
};

export const studentControl = {
  
  getAllSutdentfromDb,
  singelStudentById,
  singelDataUpdate,
};
