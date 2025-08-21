import { IUser } from "../models/user";
import { CreateUserRepo, UserCheckRepo } from "../repositories/auth";
import { IUsers } from "../types/user";
import { ExpressError } from "../utils/ExpressError";
import { loginInput, loginSchema } from "../validators/loginSchema";
import bcrypt from "bcryptjs";
import { userSchema } from "../validators/user";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";

export const loginCheck = async (user: loginInput): Promise<IUser> => {
  const userData = loginSchema.safeParse(user);
  if (!userData.success) {
    throw new ExpressError(
      500,
      JSON.stringify(userData.error.flatten().fieldErrors)
    );
  }
  const findUser = await UserCheckRepo(userData.data.email);
  if (!findUser) throw new ExpressError(500, "User Not Found");

  const compare: boolean = await bcrypt.compare(
    userData.data.password,
    findUser.password
  );
  if (!compare) throw new ExpressError(500, "Wrong Password");
  return findUser;
};

export const createUser = async (user: IUsers): Promise<IUser> => {
  const userData = userSchema.safeParse(user);
  if (!userData.success) {
    throw new ExpressError(
      500,
      JSON.stringify(userData.error.flatten().fieldErrors)
    );
  }
  const userFound = await UserCheckRepo(userData.data.email);
  if (userFound) throw new ExpressError(401, "User Already Registered");
  const hashPassword = await bcrypt.hash(userData.data.password, 10);
  const userCreated = await CreateUserRepo({
    name: userData.data.name,
    email: userData.data.email,
    password: hashPassword,
  });
  return userCreated;
};

export const forgetPassword = async (email: string): Promise<void> => {
  if (!email) throw new ExpressError(500, "Email Not Found !!");

  const userFound = await UserCheckRepo(email);
  if (!userFound) throw new ExpressError(401, "User Not Registered");

  const token = jwt.sign({ email }, process.env.SECRET!, {
    expiresIn: "15m",
  });
  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
  await sendEmail(
    email,
    "Reset Your Password",
    `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
  );
};

export const resetPassword = async (
  token: string,
  password: string
): Promise<void> => {
  if (!password) throw new ExpressError(500, "Password Not Found !!");
  const decoded = jwt.verify(token!, process.env.SECRET!) as jwt.JwtPayload;
  const email = decoded.email;
  const user = await UserCheckRepo(email);
  if (!user) throw new ExpressError(500, "User Not Found");
  const pass = await bcrypt.hash(password, 10);
  user.password = pass;
  await user.save();
};

export const emailVerification = async (email: string): Promise<void> => {
  const token = jwt.sign({ email }, process.env.SECRET!, {
    expiresIn: "15m",
  });
  const verifyLink = `${process.env.CLIENT_URL}/verify-email/${token}`;
  await sendEmail(
    email,
    "Verify Your Email",
    `<h2>Hello ${email}</h2><p>Click <a href="${verifyLink}">here</a> to verify your email.</p>`
  );
};

export const emailConfirmation = async (token: string): Promise<void> => {
  const decoded = jwt.verify(token!, process.env.SECRET!) as jwt.JwtPayload;
  const email = decoded.email;
  const user = await UserCheckRepo(email);
  if (!user) throw new ExpressError(500, "User Not Found");
};
