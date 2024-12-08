import { academicSemesterNameCodeMapper } from "./academicSemester.constent";
import { TAcademicSemseter } from "./academicSemester.interface"
import { AcademicSemester } from "./academicSemester.model"



const createAcademicSemesterIntoDb=async (payload:TAcademicSemseter) =>{
     if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
       throw new Error('Invalid Semester Code');
     }

    const result = await AcademicSemester.create(payload);
    return result;

}


export const  AcademicSemesterService ={
    createAcademicSemesterIntoDb
}