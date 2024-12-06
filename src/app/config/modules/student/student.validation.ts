import { z } from 'zod';

// Zod schema for TuserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First Name is required' })
    .max(20, { message: 'Name cannot be more than 20 characters' }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last Name is required' })
    .max(20, { message: 'Name cannot be more than 20 characters' }),
});

// Zod schema for TGuardian
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No is required' }),
});

// Zod schema for TLocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
});

// Zod schema for TStudent
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  //   user: z.string().optional(), // Uncomment if needed
  password: z.string().max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Gender is required' }),
  }),
  dathOfBirth: z.date().optional(),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present Address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent Address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isDeleted: z.boolean().default(false),
});

export { studentValidationSchema };
