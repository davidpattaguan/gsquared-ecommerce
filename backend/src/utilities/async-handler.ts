//Function to Handle Async errors - for us not to use try catch block repeatedly

import { Request, Response, NextFunction } from "express";

export function asyncHandler<T = Request, U = Response>(
  fn: (req: T, res: U, next: NextFunction) => Promise<any>
) {
  return function (req: T, res: U, next: NextFunction) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
