import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandelar } from './app/middlewares/globalErrorHandelar';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';




const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(cors());
// application routes
app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
  const a = 17;
  res.send(a);
});



app.use(globalErrorHandelar)
app.use(notFound)
export default app;
