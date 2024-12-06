import { model, Model, Schema, Types } from 'mongoose';

// export type UserName={
//   firstName : string,
//   lastName: string,
// }
export type TuserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TuserName;
  gender: 'male' | 'female' | 'other';
  dathOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  admissionsemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};


// for creating stactic method
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: String): Promise<TStudent | null>;
}
