import { model, Schema } from 'mongoose';
import { Student } from './student.Interface';

export const StudentSchema = new Schema<Student>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email validation
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10,15}$/, // Basic phone number validation
  },
});

export const StudentModel = model<Student>('Student', StudentSchema);
