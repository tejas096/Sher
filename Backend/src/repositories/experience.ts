import Experience, { IExperience } from "../models/experience";
import { IExperiences } from "../types/experience";
import { ExpressError } from "../utils/ExpressError";

export const createExperience = async (
  data: IExperiences
): Promise<IExperience> => {
  const experience = new Experience(data);
  return await experience.save();
};

export const findAll = async (owner: string): Promise<IExperience[]> => {
  return await Experience.find({ owner: owner });
};

export const findExperienceById = async (
  id: string
): Promise<IExperience | null> => {
  return await Experience.findById(id);
};

export const deleteExperienceById = async (id: string): Promise<void> => {
  await Experience.findByIdAndDelete(id);
};

export const changeShow = async (id: string): Promise<IExperience> => {
  const experience = await Experience.findById(id);
  if (!experience) throw new ExpressError(500, "Experience not found");
  experience.show = !experience.show;
  return await experience.save();
};
