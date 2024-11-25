import express from 'express';
import { studentControl } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControl.createStudent);
router.get('/allStudents', studentControl.getAllSutdentfromDb);
router.get('/:studentId', studentControl.singelStudentById);

export const routers = router;
