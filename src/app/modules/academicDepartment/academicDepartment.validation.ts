import { z } from "zod"

const createAcademicDepartmentValidation=z.object({
 body:z.object({
     name:z.string({
         invalid_type_error:'Name is required'
     }),
    academicFaculty:z.string({
        invalid_type_error:'Academic Faculty is required'
    })

 })
})

const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name is required',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty is required',
    }).optional(),
  }),
});


export const academicDepartmentValidation={
    createAcademicDepartmentValidation,
    updateAcademicDepartmentValidation
}