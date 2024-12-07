import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import {  studentRouters } from './app/modules/student/student.ruter';
import { userRoutes } from './app/modules/user/user.route';
import { globalErrorHandelar } from './app/middlewares/globalErrorHandelar';
import { notFound } from './app/middlewares/notFound';




const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/api/students', studentRouters);
app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 17;
  res.send(a);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.use(globalErrorHandelar)
app.use(notFound)
export default app;
