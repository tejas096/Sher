import cloudinary from "../config/cloudinary";
import {
  createSkill,
  findSkillById,
  deleteSkillById,
  findAll,
  deleteSkillbyProjects,
  changeShow,
} from "../repositories/skills";
import { skillSchema, SkillInput } from "../validators/skills";
import { ISkill } from "../types/skills";
import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

export const getSkillsService = async (owner: string): Promise<ISkill[]> => {
  return await findAll(owner);
};

export const addSkill = async (
  data: SkillInput,
  file: Express.Multer.File,
  owner: string
): Promise<ISkill> => {
  const parsed = skillSchema.safeParse(data);
  if (!parsed.success) {
    throw new ExpressError(
      500,
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }
  if (!file) {
    throw new ExpressError(500, "Image file is required");
  }
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "portfolio/skills",
  });

  return await createSkill({
    name: parsed.data.name,
    show: parsed.data.show ?? false,
    title: parsed.data.title ?? "",
    image: result.secure_url,
    category: parsed.data.category,
    owner: new mongoose.Types.ObjectId(owner),
  });
};

export const deleteSkill = async (id: string): Promise<void> => {
  const skill = await findSkillById(id);
  if (!skill) throw new ExpressError(500, "Skill not found");

  const publicId = skill.image.split("/").pop()?.split(".")[0];
  if (publicId) {
    await cloudinary.uploader.destroy(`portfolio/skills/${publicId}`);
  }
  await deleteSkillbyProjects(id);
  await deleteSkillById(id);
};

export const toggleShow = async (id: string): Promise<ISkill> => {
  return await changeShow(id);
};
