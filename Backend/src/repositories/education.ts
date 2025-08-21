import Education from "../models/education";
import { IEducations } from "../types/education";

export const createEducation = async (
  data: IEducations
): Promise<IEducations> => {
  const education = new Education(data);
  return await education.save();
};

export const findAll = async (owner: string): Promise<IEducations[]> => {
  return await Education.find({ owner: owner });
};

export const findEducationById = async (
  id: string
): Promise<IEducations | null> => {
  return await Education.findById(id);
};

export const deleteEducationById = async (id: string): Promise<void> => {
  await Education.findByIdAndDelete(id);
};
