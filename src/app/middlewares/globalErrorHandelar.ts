import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const globalErrorHandelar: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something is wrong!';
  type TErrorSources = {
    path: string | number;
    message: string;
  }[];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: 'Somethig is Wrong',
    },
  ];

  if (err instanceof ZodError) {
    statusCode: 400;
    message: 'This is zod Error';
  }
  res.status(statusCode).json({
    seccess: false,
    message,
    errorSources,
    error: err,
  });
};
