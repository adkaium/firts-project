import { Student } from './student.modle';
import { TStudent } from './student.Interface';

//creat student
const createNewStudent = async (studentData: TStudent) => {
  const result = await Student.create(studentData);

  return result;
};

// get all student
const getAllStudent = async () => {
  const result = await Student.find();
  // console.log(result);
  return result;
};

// get one student by Id:
const getSingelStudent = async (_id: string) => {
  const result = await Student.findById(_id);

  return result;
};

// update data by using patch
const updateData = async (_id: string, doc: {}) => {
  console.log(doc);
  const {} = doc;
  const result = await Student.findByIdAndUpdate(_id, doc, {
    new: true,
    runValidators: true,
  });
  // console.log(result);
  return result;
};

export const studentService = {
  createNewStudent,
  getAllStudent,
  getSingelStudent,
  updateData,
};
