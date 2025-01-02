import { Router } from 'express';
import { studentRouters } from '../modules/student/student.ruter';
import { userRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/admin/admin.router';
import { CourseRoutes } from '../modules/course/course.route';

const router = Router();

const moduleRoute = [
  {
    path: '/students',
    route: studentRouters,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoute,
  },
  {
    path:'/faculty',
    route:FacultyRoutes
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path:'/crouse',
    route:CourseRoutes
  }
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
