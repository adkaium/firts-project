import { StudentModel } from './student.modle';
import { Student } from './student.Interface';


//creat student
const createNewStudent = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData);
  const student = new StudentModel(studentData)
  if ( await student.isExestsingStudent(studentData.email)){
    throw new Error("This email already Exixting")
    
  }
     await student.myStaticMethod
    
    
    const result = student.save();
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

// update data by using patch
const updateData = async (_id: string, doc: {}) => {
  console.log(doc);
  const {} = doc;
  const result = await StudentModel.findByIdAndUpdate(_id, doc, {
    new: true,
    runValidators: true,
  });
  console.log(result);
  return result;
};

export const studentService = {
  createNewStudent,
  getAllStudent,
  getSingelStudent,
  updateData,
};
