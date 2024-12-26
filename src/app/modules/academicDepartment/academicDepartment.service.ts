import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


const creaetAcademicDepartMentIntoDB = async(payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
}

const getAcademicDepartMentFromDB = async()=>{
    const result = await AcademicDepartment.find().populate('academicFaculty');
    return result;
}

const getAcademicDepartMentByIdFromDB = async(id:string)=>{
    const result =
      await AcademicDepartment.findById(id).populate('academicFaculty');
    return result;
}

const updateAcademicDepartMentInDB = async(id:string,payload:TAcademicDepartment)=>{
    const result = await AcademicDepartment.findByIdAndUpdate(id,payload,{new:true});
    return result;
}

const deleteAcademicDepartMentFromDB = async(id:string)=>{
    const result =await AcademicDepartment.findByIdAndDelete(id);
    return result;
}

export const AcademicDepartmentService = {
    creaetAcademicDepartMentIntoDB,
    getAcademicDepartMentFromDB,
    getAcademicDepartMentByIdFromDB,
    updateAcademicDepartMentInDB,
    deleteAcademicDepartMentFromDB
}