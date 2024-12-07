import { z } from "zod";


const userValidationSchema = z.object({
 
  password: z.string({
    invalid_type_error:"password must be string"
  })
  .max(20, { message: 'more than 20 char not allowed' })
  .optional()
});


export default userValidationSchema;