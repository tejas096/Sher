import Project, { IProject } from "../models/project";
import { IProjects } from "../types/project";
import { ExpressError } from "../utils/ExpressError";

export const createProject = async (data: IProjects): Promise<IProject> => {
  const project = new Project(data);
  return await project.save();
};

export const findAll = async (owner: string): Promise<IProject[]> => {
  return await Project.find({ owner: owner }).populate("techStack");
};

export const findProjectById = async (id: string): Promise<IProject | null> => {
  return await Project.findById(id);
};

export const deleteProjectById = async (id: string): Promise<void> => {
  await Project.findByIdAndDelete(id);
};

export const changeShow = async (id: string): Promise<IProject> => {
  const project = await Project.findById(id);
  if (!project) throw new ExpressError(500, "Project not found");
  project.show = !project.show;
  return await project.save();
};
