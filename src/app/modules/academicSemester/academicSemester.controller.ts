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

export const AcademicSemesterController = {
    createAcademicSemester,
}