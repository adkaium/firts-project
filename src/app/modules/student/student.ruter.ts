import express from 'express';
import { studentControl } from './student.controller';



const router = express.Router();

router.post('/create-student', studentControl.createStudent);
router.get('/allStudents', studentControl.getAllSutdentfromDb);
router.get('/:studentId', studentControl.singelStudentById);
router.put('/:studentId', studentControl.singelDataUpdate);
// router.patch('/:studentId', studentControl.singelDataUpdate);

export const routers = router;
