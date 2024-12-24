import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterName, Month } from "./academicSemester.constent";



const academicSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterName,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
  },
  year: {
    type: String,
  },
  startMonth: {
    type: String,
    enum: Month,
  },
  endMonth: {
    type: String,
    enum: Month,
  },
});


academicSchema.pre('save', async function(next){
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('This Semester is alrady Created');
  }
  next()
})


export const AcademicSemester = model('AcademicSemester',academicSchema)