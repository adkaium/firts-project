import { Router } from "express";
import { validationRequest } from "../../middlewares/validationRequet";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";



const route = Router();

route.post('/create-Department',validationRequest(academicDepartmentValidation.createAcademicDepartmentValidation),AcademicDepartmentController.creatAcademicDepartment);
route.get('/',AcademicDepartmentController.getAcademicDepartment);
route.get('/:id',AcademicDepartmentController.getAcademicDepartmentById);
route.put('/:id',validationRequest(academicDepartmentValidation.updateAcademicDepartmentValidation),AcademicDepartmentController.updateAcademicDepartment);

route.delete('/:id',AcademicDepartmentController.deleteAcademicDepartment);


export const AcademicDepartmentRoute = route;