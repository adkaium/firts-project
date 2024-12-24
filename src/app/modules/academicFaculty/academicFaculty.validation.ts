import { z } from "zod";


const academicFacultyValidation = z.object({
    name:z.string({
        invalid_type_error:'Name must be a string',
    })
})

export const AcademicFacultyValidation = {
    academicFacultyValidation
}