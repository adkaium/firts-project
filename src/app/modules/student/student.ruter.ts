import express from 'express';
import { studentControl } from './student.controller';
import { validationRequest } from '../../middlewares/validationRequet';
import {  updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/allStudents', studentControl.getAllSutdentfromDb);
router.get('/:studentId', studentControl.singelStudentById);
router.patch(
  '/:studentId',
  validationRequest(updateStudentValidationSchema),
  studentControl.singelDataUpdate,
);
router.delete('/:studentId', studentControl.deletedStudent);


export const studentRouters = router;
