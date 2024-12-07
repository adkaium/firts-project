import express from 'express';
import { userContorller } from './user.controller';


const router = express.Router()

 router.post('/create-student', userContorller.createStudent);



 export const userRoutes = router