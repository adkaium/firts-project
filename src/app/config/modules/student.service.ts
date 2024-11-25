import { StudentModel } from "./student.modle"
import { Student } from "./student.Interface";


const createNewStuden = async (studentData:Student)=>{
    const  result =await StudentModel.create(studentData);
    return result;
}




export const studentService = {
    createNewStuden
}