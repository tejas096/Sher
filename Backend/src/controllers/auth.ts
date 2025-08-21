import { Request, Response, NextFunction } from "express";
import {
  createUser,
  emailConfirmation,
  emailVerification,
  forgetPassword,
  loginCheck,
  resetPassword,
} from "../services/auth";
import { signToken } from "../utils/signToken";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await loginCheck(req.body);

    const token = signToken(res, {
      id: user._id,
      email: user.email,
    });

    res.status(200).json({
      success: true,
      message: "User Logged In Successfully.",
      user: user,
      token: token,
    });
  } catch (error: any) {
    next(error);
  }
};

export const signUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    const token = signToken(res, {
      id: user._id,
      email: user.email,
    });
    res.status(200).json({
      success: true,
      message: "User Created Successfully.",
      user: user,
      token: token,
    });
  } catch (error: any) {
    next(error);
  }
};

export const logoutController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    res.status(200).json({ message: "User Logout Successfully." });
  } catch (error: any) {
    next(error);
  }
};

export const googleHandle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user as any;
    const token = signToken(res, {
      id: user._id,
      email: user.email,
    });
    res.redirect(`${process.env.CLIENT_URL}/outh-success`);
  } catch (error: any) {
    next(error);
  }
};

export const forgetPass = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await forgetPassword(req.body.email);
    res.status(200).json({ message: "Email Sent" });
  } catch (error: any) {
    next(error);
  }
};

export const resetPass = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resetPassword(req.params.token as string, req.body.newpassword);
    res.status(200).json({ message: "Password Change Successfully." });
  } catch (error: any) {
    next(error);
  }
};

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await emailVerification((req as any).user.email);
    res.status(200).json({ message: "Email Sent" });
  } catch (error: any) {
    next(error);
  }
};

export const confirmEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await emailConfirmation(req.params.token as string);
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error: any) {
    next(error);
  }
};
