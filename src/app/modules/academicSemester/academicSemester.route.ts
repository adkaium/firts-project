import express from 'express';
import { AcademicSemesterContorller } from './academicSemester.controller';
import { validationRequest } from '../../middlewares/validationRequet';
import { AcademicValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(AcademicValidation.CreateAcademicSemesterValidationSchema),
  AcademicSemesterContorller.createAcademicSemester,
),
router.get('/all-semester', AcademicSemesterContorller.getAllSemester);

router.get('/:semesterId', AcademicSemesterContorller.getSingleSemester);
router.patch(
  '/:semesterId',
  validationRequest(AcademicValidation.updateAcademicSemesterValidationSchema),
  AcademicSemesterContorller.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
