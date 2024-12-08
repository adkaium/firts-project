import { z } from 'zod';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constent';

const CreateAcademicSemesterValidationSchema = z.object({
  name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
  code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
  year: z.string(),
  startMonth: z.enum([...Months] as [string, ...string[]]),
  endMonth: z.enum([...Months] as [string, ...string[]]),
});

export const AcademicValidation = {
  CreateAcademicSemesterValidationSchema,
};
