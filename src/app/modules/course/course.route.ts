import express from 'express';

import { CourseValidations } from './course.validation';
import { validationRequest } from '../../middlewares/validationRequet';
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
  '/create-course',
  validationRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/:id', CourseControllers.getSingleCourse);

// router.patch(
//   '/:id',
//   validateRequest(CourseValidations.updateCourseValidationSchema),
//   CourseControllers.updateCourse,
// );

router.delete('/:id', CourseControllers.deleteCourse);

// router.put(
//   '/:courseId/assign-faculties',
//   validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
//   CourseControllers.assignFacultiesWithCourse,
// );

// router.delete(
//   '/:courseId/remove-faculties',
//   validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
//   CourseControllers.removeFacultiesFromCourse,
// );

router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router;
