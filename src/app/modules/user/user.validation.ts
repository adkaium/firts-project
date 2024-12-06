import { z } from "zod";


const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, { message: 'more than 20 char not allowed' }),
  needsPassword: z.boolean().optional().default(true),
  role: z.enum(['admin','student', 'faculty']),
  status:z.enum(['in-progress','blocked']).default('in-progress'),
  isDeleted:z.boolean().default(false).optional()
});


export default userValidationSchema;