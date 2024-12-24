import { catchAsync } from "../../utilits/catchAsync";
import sendResponse from "../../utilits/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";



const academicFacultyCreate = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.createAcademicFaculty(req.body)
    sendResponse(res,{
        success:true,
        statusCode:201,
        message:"Academic Faculty Created Successfully",
        data:result
    })
})

const academicFacultyGet = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.getAcademicFaculty()
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Faculty Get Successfully",
        data:result
    })
})

const academicFacultyGetById = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.getAcademicFacultyById(req.params.id)
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Faculty Get Successfully",
        data:result
    })
})

const academicFacultyUpdate = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.updateAcademicFaculty(req.params.id,req.body)
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Faculty Updated Successfully",
        data:result
    })
})

const academicFacultyDelete = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.deleteAcademicFaculty(req.params.id)
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Faculty Deleted Successfully",
        data:result
    })
})


export const AcademicFacultyController = {
    academicFacultyCreate,
    academicFacultyGet,
    academicFacultyGetById,
    academicFacultyUpdate,
    academicFacultyDelete,
}