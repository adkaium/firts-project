import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";


const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name:{
        type:String,
        required:true,
    },
    academicFaculty:{
        type:Schema.Types.ObjectId,
        ref:'AcademicFaculty',
        
    }
})


export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);