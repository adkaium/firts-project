import express, { NextFunction, Request, Response } from 'express';
import { userContorller } from './user.controller';
import { studentValidation } from '../student/student.validation';
import { validationRequest } from '../../middlewares/validationRequet';


const router = express.Router()



 router.post(
   '/create-student',
   validationRequest(studentValidation.studentValidationSchema),
   userContorller.createStudent,
 );



 export const userRoutes = router