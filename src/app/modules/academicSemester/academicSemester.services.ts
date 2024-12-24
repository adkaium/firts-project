import { academicSemesterNameCodeMapper } from './academicSemester.constent';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const crearteAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemesters = async () => {
  const allSemester = await AcademicSemester.find();
  return allSemester;
};

const getSingleSemesterById = async(id:string)=>{
  const singleSemester = await AcademicSemester.findById(id);
  return singleSemester;
}

const updateAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  crearteAcademicSemesterIntoDB,
  getAllSemesters,
  getSingleSemesterById,
  updateAcademicSemester,
};
