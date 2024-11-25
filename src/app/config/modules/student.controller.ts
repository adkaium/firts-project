import { Request, Response } from "express";
import { studentService } from "./student.service";
import { Student } from "./student.Interface";




const createStudent = async (req:Request,res:Response) =>{
      try{
         const studentdata = req.body;
      const result = await studentService.createNewStuden(studentdata)
      res.status(200).json({
        successful: true,
         Data: result
      })
      }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message || "Something went to wrong",
            data:{}
        })
      }
}


export const studentControl={
    createStudent
}