import { Response, Request, NextFunction } from "express";
import { ExpressError } from "../utils/ExpressError";
import jwt from "jsonwebtoken";

export const tokenValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new ExpressError(500, "Token Not Found");
    const secret: string = process.env.SECRET || "DEFAULT SECRET";
    const user = jwt.verify(token, secret);
    if (!user || typeof user === "string") {
      throw new Error("User doesn't have access");
    }
    req.user = {
      id: user.id,
      email: user.email,
    };
    next();
  } catch (err) {
    next(err);
  }
};
