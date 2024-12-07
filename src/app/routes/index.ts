import { Router } from "express";
import { studentRouters } from "../modules/student/student.ruter";
import { userRoutes } from "../modules/user/user.route";



const router = Router();


const moduleRoute =[
    {
        path:'/students',
        route:studentRouters,
    },
    {
        path:'/users',
        route: userRoutes
    }
]

moduleRoute.forEach((route)=>router.use(route.path,route.route))


export default router