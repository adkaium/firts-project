import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
import { routers } from './app/config/modules/student.ruter';

const app: Application = express();
const port =  3001;

app.use(express.json());
app.use(cors());
app.use('/api/students',routers)

app.get('/', (req: Request, res: Response) => {
  const a = 17;
  res.send(a);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
