import User, { IUser } from "../models/user";
import { IUsers } from "../types/user";

export const UserCheckRepo = async (email: string): Promise<IUser | null> =>
  await User.findOne({ email });

export const CreateUserRepo = async (user: IUsers): Promise<IUser> =>
  await User.create(user);
