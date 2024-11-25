import { Request, Response } from "express";
import { studentService } from "./student.service";





const createStudent = async (req:Request,res:Response) =>{
      try{
         const studentdata = req.body;
      const result = await studentService.createNewStudent(studentdata)
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


const getAllSutdentfromDb = async (req:Request, res:Response)=>{
    try {
         
        const result = await studentService.getAllStudent();
        
        res.status(200).json({
            successful:true,
            data:result
        })
    } catch (error:any) {
        res.status(500).json({
            success:false,
            message:error.message || "Something went to wrong",
            data:{}
        })
    }
}


export const studentControl={
    createStudent,
    getAllSutdentfromDb
}