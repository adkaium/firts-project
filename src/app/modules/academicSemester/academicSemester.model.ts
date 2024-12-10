import { model, Schema } from 'mongoose';
import { TAcademicSemseter} from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constent';


const acdemicSemesterSchema = new Schema<TAcademicSemseter>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

acdemicSemesterSchema.pre("save", async function(next){
 const isSemesterExsist= await AcademicSemester.findOne({
    year:this.year,
    name:this.name,
  })
  if(isSemesterExsist){
    throw new Error('This semester is alrady Exists')
  }

})



export const AcademicSemester = model<TAcademicSemseter>(
  'academicSemester',
  acdemicSemesterSchema,
);
