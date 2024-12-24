import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { validationRequest } from "../../middlewares/validationRequet";
import { AcademicSemesterValidation } from "./academicSemester.validation";



const route = Router();

route.post('/create-academic-semester',validationRequest(AcademicSemesterValidation.createAcademicSemesterValidation) ,AcademicSemesterController.createAcademicSemester);
route.get('/all-semesters',AcademicSemesterController.getAllAcademicSemesters);
route.get('/:id',AcademicSemesterController.getASemester);
route.patch('/:id',validationRequest(AcademicSemesterValidation.updateAcademicSemesterValidation) ,AcademicSemesterController.updateSemester)

export const AcademicSemesterRoute = route;