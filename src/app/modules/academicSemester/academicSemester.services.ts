import { academicSemesterNameCodeMapper } from './academicSemester.constent';
import { TAcademicSemseter } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemseter) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

// getall SemestersFromDB create find
const getAllAcademicSemestersFromDB = async ()=>{
  const result = await AcademicSemester.find();
  return result;
}

// get single Semesters From DB 
const getSingelSemesterFromDB = async (id:string)=>{
  const result = await AcademicSemester.findById(id)
  return result
}
// update data 
const updateDataIntoDB = async (id:string,payload:Partial<TAcademicSemseter>)=>{
  if(payload.name && payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code)
  {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({_id:id},
   payload,{
    new:true
   }
  )
  return result;
}



export const AcademicSemesterService = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemestersFromDB,
  getSingelSemesterFromDB,
  updateDataIntoDB,
};
