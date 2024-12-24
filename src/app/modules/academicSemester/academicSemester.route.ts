import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { validationRequest } from "../../middlewares/validationRequet";
import { AcademicSemesterValidation } from "./academicSemester.validation";



const route = Router();

route.post('/create-academic-semester',validationRequest(AcademicSemesterValidation.createAcademicSemesterValidation) ,AcademicSemesterController.createAcademicSemester);


export const AcademicSemesterRoute = route;