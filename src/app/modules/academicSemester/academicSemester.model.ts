import { model, Schema } from 'mongoose';
import { TAcademicSemseter, TMonths } from './academicSemester.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const acdemicSemesterSchema = new Schema<TAcademicSemseter>(
  {
    name: {
      type: String,
      enum: ['Autumn', 'Summar', 'Fall'],
      required: true,
    },
    code: {
      type: String,
      enum: ['01', '02', '03'],
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TAcademicSemseter>(
  'academicSemester',
  acdemicSemesterSchema,
);
