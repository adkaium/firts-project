import { z } from "zod";
import { AcademicSemesterCode, AcademicSemesterName, Month } from "./academicSemester.constent";

const createAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    year:z.string(),
    startMonth:z.enum([...Month] as [string, ...string[]]),
    endMonth:z.enum([...Month] as [string, ...string[]]),
  }),
});
const updateAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]).optional(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...Month] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Month] as [string, ...string[]]).optional(),
  }),
});



export const AcademicSemesterValidation = {
  createAcademicSemesterValidation,
  updateAcademicSemesterValidation,
};