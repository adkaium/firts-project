import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const findLastStudent = async()=>{
  const lastStudent = await User.findOne({
    role:'student'
  },{
    id:1,
    _id:0
  }).sort(
    { createdAt: -1 }
  ).lean()

  return lastStudent?.id ? lastStudent.id : undefined;
}


export const generatestudentId = async (payload:TAcademicSemester)=>{

    let countId =(0).toString();

    const lastStudentId = await findLastStudent();
    const lastStudentYear = lastStudentId?.slice(0,4);
    const lastStudentCode = lastStudentId?.slice(4,6);
    const  currentYear = payload.year;
    const currentCode = payload.code;

    if (lastStudentId && lastStudentCode === currentCode && lastStudentYear === currentYear) {
        countId = lastStudentId.slice(6,10);
    }
        
    const increment = (Number(countId)+1).toString().padStart(4,'0')

    const result = `${payload.year}${payload.code}${increment}`;

    return result

  }
