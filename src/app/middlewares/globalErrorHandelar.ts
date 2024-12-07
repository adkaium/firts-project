
import  {  NextFunction, Request, Response } from 'express';

export const globalErrorHandelar=(err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'something is wrong!';
  res.status(statusCode).json({
    seccess: false,
    message,
    error: err,
  });
};