import { NextFunction, Request, Response } from "express";
import {
  addExperience,
  deleteExperience,
  getExperiencesService,
  toggleShow,
} from "../services/experience";

export const getExperiences = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const experiences = await getExperiencesService(
      (req as any).user.id as string
    );
    res.status(200).json(experiences);
  } catch (error: any) {
    next(error);
  }
};

export const createExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const experience = await addExperience(
      req.body,
      (req as any).user.id as string
    );
    res.status(201).json(experience);
  } catch (error: any) {
    next(error);
  }
};

export const deleteExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteExperience(req.params.id as string);
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};

export const toggleExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await toggleShow(req.params.id as string);
    return res.status(200).json({ message: "Experience updated successfully" });
  } catch (error: any) {
    next(error);
  }
};
