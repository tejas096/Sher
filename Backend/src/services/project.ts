import cloudinary from "../config/cloudinary";
import { IProject } from "../models/project";
import { ProjectInput, projectSchema } from "../validators/project";
import mongoose from "mongoose";
import {
  createProject,
  deleteProjectById,
  findAll,
  findProjectById,
  changeShow,
} from "../repositories/project";
import { ExpressError } from "../utils/ExpressError";

export const getProjectsService = async (
  owner: string
): Promise<IProject[]> => {
  return await findAll(owner);
};

export const addProject = async (
  data: ProjectInput,
  file: Express.Multer.File,
  owner: string
): Promise<IProject> => {
  const parsed = projectSchema.safeParse(data);
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
    folder: "Craftfolio/projects",
  });

  return await createProject({
    owner: new mongoose.Types.ObjectId(owner),
    title: parsed.data.title,
    description: parsed.data.description,
    image: result.secure_url,
    techStack: parsed.data.techStack.map(
      (id) => new mongoose.Types.ObjectId(id)
    ),
    githubLink: parsed.data.githubLink,
    liveLink: parsed.data.liveLink,
    show: parsed.data.show ?? false,
  });
};

export const deleteProject = async (id: string): Promise<void> => {
  const project = await findProjectById(id);
  if (!project) throw new ExpressError(500, "Project not found");

  const publicId = project.image.split("/").pop()?.split(".")[0];
  if (publicId) {
    await cloudinary.uploader.destroy(`Craftfolio/projects/${publicId}`);
  }

  await deleteProjectById(id);
};

export const toggleShow = async (id: string): Promise<IProject> => {
  return await changeShow(id);
};
