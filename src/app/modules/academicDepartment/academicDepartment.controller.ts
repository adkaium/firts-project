import { catchAsync } from "../../utilits/catchAsync";
import sendResponse from "../../utilits/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";



const creatAcademicDepartment =catchAsync(async(req,res)=>{
   const payload = req.body;
   const result = await AcademicDepartmentService.creaetAcademicDepartMentIntoDB(payload)

   sendResponse(res,{
    success:true,
    statusCode:200,
    message:"Academic Department Created Successfully",
    data:result
   })
});

const getAcademicDepartment = catchAsync(async(req,res)=>{
    const result = await AcademicDepartmentService.getAcademicDepartMentFromDB();
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Department Fetched Successfully",
        data:result
    });
      
});

const getAcademicDepartmentById = catchAsync(async(req,res)=>{
    const id = req.params.id;
    const result = await AcademicDepartmentService.getAcademicDepartMentByIdFromDB(id);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Department Fetched Successfully",
        data:result
    });
})

const updateAcademicDepartment = catchAsync(async(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const result = await AcademicDepartmentService.updateAcademicDepartMentInDB(id,payload);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Department Updated Successfully",
        data:result
    });
})

const deleteAcademicDepartment = catchAsync(async(req,res)=>{
    const id = req.params.id;
    const result = await AcademicDepartmentService.deleteAcademicDepartMentFromDB(id);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Academic Department Deleted Successfully",
        data:result
    });
})


export const AcademicDepartmentController = {
    creatAcademicDepartment,
    getAcademicDepartment,
    getAcademicDepartmentById,
    updateAcademicDepartment,
    deleteAcademicDepartment
}