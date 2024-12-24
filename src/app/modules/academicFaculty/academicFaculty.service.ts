import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFaculty = async (payload:TAcademicFaculty)=>{

    const result = await AcademicFaculty.create(payload);
    return result;

}

const getAcademicFaculty = async()=>{
    const result = await AcademicFaculty.find();
    return result;

}

const getAcademicFacultyById = async(id:string)=>{
    const result = await AcademicFaculty.findById(id);
    return result;

}

const updateAcademicFaculty = async(id:string,payload:TAcademicFaculty)=>{
    const result = await AcademicFaculty.findByIdAndUpdate(id,payload,{new:true});
    return result;
}


const deleteAcademicFaculty = async(id:string)=>{
    const result = await AcademicFaculty.findByIdAndDelete(id);
    return result;
}


export const AcademicFacultyService = {
    createAcademicFaculty,
    getAcademicFaculty,
    getAcademicFacultyById,
    updateAcademicFaculty,
    deleteAcademicFaculty
}