import { StudentModel } from "./student.modle"
import { Student } from "./student.Interface";


const createNewStudent = async (studentData:Student)=>{
    const  result =await StudentModel.create(studentData);
    return result;
}

const getAllStudent = async ()=>{
    const result= await StudentModel.find();
    console.log(result);
    return result
}



export const studentService = {
    createNewStudent,
    getAllStudent,
}