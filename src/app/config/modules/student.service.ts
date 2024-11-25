import { StudentModel } from './student.modle';
import { Student } from './student.Interface';

//creat student
const createNewStudent = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

// get all student
const getAllStudent = async () => {
  const result = await StudentModel.find();
  console.log(result);
  return result;
};

// get one student by Id:

const getSingelStudent = async (_id: string) => {
  const result = await StudentModel.findById(_id);

  return result;
};

export const studentService = {
  createNewStudent,
  getAllStudent,
  getSingelStudent,
};
