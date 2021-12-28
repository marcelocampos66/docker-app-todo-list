import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

export default (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status: number = err.status;
  const message: string = err.message;

  return res.status(status).json({ message });
};
