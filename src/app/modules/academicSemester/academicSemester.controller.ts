import { catchAsync } from "../../utilits/catchAsync";
import sendResponse from "../../utilits/sendResponse";
import { AcademicSemesterService } from "./academicSemester.services";


const createAcademicSemester = catchAsync(async(req, res)=>{
    const academicSemester = await AcademicSemesterService.crearteAcademicSemesterIntoDB(req.body)
    sendResponse(res,{
        success:true,
        statusCode:201,
        message:"Academic Semester created successfully",
        data:academicSemester,
    })
})

const getAllAcademicSemesters = catchAsync(async(req,res)=>{
    const allAcdemicSemesters = await AcademicSemesterService.getAllSemesters()
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"All Semester get Successfully",
        data:allAcdemicSemesters,
    })
})

const getASemester = catchAsync(async(req,res)=>{
    const {id} = req.params;

    const semester = await AcademicSemesterService.getSingleSemesterById(id)
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Get a Semester successfully",
        data:semester,
    })

})

const updateSemester = catchAsync(async(req,res)=>{
    const {id} = req.params;
    
    const updateData = await  AcademicSemesterService.updateAcademicSemester(id,req.body)
     sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Semester Successfully Update",
        data:updateData
     })
})

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getASemester,
  updateSemester,
};