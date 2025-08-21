import { NextFunction, Request, Response } from "express";
import {
  addProject,
  deleteProject,
  getProjectsService,
  toggleShow,
} from "../services/project";

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await getProjectsService((req as any).user.id as string);
    res.status(200).json(projects);
  } catch (error: any) {
    next(error);
  }
};

export const createProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Project = await addProject(
      req.body,
      req.file as Express.Multer.File,
      (req as any).user.id as string
    );
    res.status(201).json(Project);
  } catch (error: any) {
    next(error);
  }
};

export const deleteProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteProject(req.params.id as string);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};

export const toggleProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await toggleShow(req.params.id as string);
    return res.status(200).json({ message: "Project updated successfully" });
  } catch (error: any) {
    next(error);
  }
};
