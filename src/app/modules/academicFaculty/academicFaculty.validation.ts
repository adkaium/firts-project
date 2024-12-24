import { z } from "zod";


const academicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
  }),
});

const academicFacultyUpdateValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
  }),
});



export const AcademicFacultyValidation = {
    academicFacultyValidation,
    academicFacultyUpdateValidation
}