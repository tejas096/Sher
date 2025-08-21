import {
  createExperience,
  findExperienceById,
  deleteExperienceById,
  findAll,
  changeShow,
} from "../repositories/experience";
import { experienceSchema, ExperienceInput } from "../validators/experience";
import { IExperience } from "../models/experience";
import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

export const getExperiencesService = async (
  owner: string
): Promise<IExperience[]> => {
  return await findAll(owner);
};

export const addExperience = async (
  data: ExperienceInput,
  owner: string
): Promise<IExperience> => {
  const parsed = experienceSchema.safeParse(data);
  if (!parsed.success) {
    throw new ExpressError(
      500,
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }
  return await createExperience({
    company: parsed.data.company,
    position: parsed.data.position,
    startDate: parsed.data.startDate,
    endDate: parsed.data.endDate ?? "",
    description: parsed.data.description,
    show: parsed.data.show ?? false,
    owner: new mongoose.Types.ObjectId(owner),
  });
};

export const deleteExperience = async (id: string): Promise<void> => {
  const experience = await findExperienceById(id);
  if (!experience) throw new ExpressError(500, "Experience not found");

  await deleteExperienceById(id);
};

export const toggleShow = async (id: string): Promise<IExperience> => {
  return await changeShow(id);
};
