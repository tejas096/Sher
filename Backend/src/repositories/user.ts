import User, { IUser } from "../models/user";

export const UserCheckRepo = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email }).populate([
    { path: "data.skills" },
    { path: "data.projects", populate: { path: "techStack" } },
    { path: "data.education" },
    { path: "data.experience" },
    { path: "data.blogs" },
    { path: "data.faqs" },
  ]);
};
