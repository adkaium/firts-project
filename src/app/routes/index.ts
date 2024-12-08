import { Router } from "express";
import { studentRouters } from "../modules/student/student.ruter";
import { userRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";



const router = Router();


const moduleRoute =[
    {
        path:'/students',
        route:studentRouters,
    },
    {
        path:'/users',
        route: userRoutes
    },
    {
        path:'/academic-semesters',
        route:AcademicSemesterRoutes
    }
]

moduleRoute.forEach((route)=>router.use(route.path,route.route))


export default router