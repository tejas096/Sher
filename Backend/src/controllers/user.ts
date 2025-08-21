import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import { UserCheckRepo } from "../repositories/user";

export const getUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserCheckRepo((req as any).user.email);
    res.status(200).json({ user });
  } catch (error: any) {
    next(error);
  }
};
