import express from "express"
import { studentControl } from "./student.controller"

const router = express.Router()

router.post('/create-student', studentControl.createStudent)



export  const routers = router;