import express from 'express'
import { AcademicSemesterContorller } from './academicSemester.controller';
import { validationRequest } from '../../middlewares/validationRequet';
import  { AcademicValidation } from './academicSemester.validation';

const router = express.Router();



router.post('/create-academic-semester',validationRequest(AcademicValidation.CreateAcademicSemesterValidationSchema),AcademicSemesterContorller.createAcademicSemester)


export const AcademicSemesterRoutes = router