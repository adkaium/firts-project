import express from 'express';
import { studentControl } from './student.controller';
import { validationRequest } from '../../middlewares/validationRequet';
import { studentValidation } from './student.validation';

const router = express.Router();

router.get('/allStudents', studentControl.getAllSutdentfromDb);
router.get('/:studentId', studentControl.singelStudentById);
router.patch(
  '/:studentId',
  validationRequest(studentValidation.updatestudentValidationSchema),
  studentControl.singelDataUpdate,
);
router.delete('/:studentId', studentControl.deletedStudent);
// router.patch('/:studentId', studentControl.singelDataUpdate);

export const studentRouters = router;
