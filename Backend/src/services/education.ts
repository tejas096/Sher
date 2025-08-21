import {
  createEducation,
  findEducationById,
  deleteEducationById,
  findAll,
} from "../repositories/education";
import { educationSchema, EducationInput } from "../validators/education";
import { IEducations } from "../types/education";
import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

export const getEducationsService = async (
  owner: string
): Promise<IEducations[]> => {
  return await findAll(owner);
};

export const addEducation = async (
  data: EducationInput,
  owner: string
): Promise<IEducations> => {
  const parsed = educationSchema.safeParse(data);
  if (!parsed.success) {
    throw new ExpressError(
      500,
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }
  return await createEducation({
    school: parsed.data.school,
    degree: parsed.data.degree,
    field: parsed.data.field,
    startYear: parsed.data.startYear,
    owner: new mongoose.Types.ObjectId(owner),
    endYear: parsed.data.endYear ?? "",
  });
};

export const deleteEducation = async (id: string): Promise<void> => {
  const education = await findEducationById(id);
  if (!education) throw new ExpressError(500, "Education not found");

  await deleteEducationById(id);
};
