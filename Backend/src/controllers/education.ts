import { NextFunction, Request, Response } from "express";
import {
  addEducation,
  deleteEducation,
  getEducationsService,
} from "../services/education";

export const getEducations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const educations = await getEducationsService(
      (req as any).user.id as string
    );
    res.status(200).json(educations);
  } catch (error: any) {
    next(error);
  }
};

export const createEducationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const education = await addEducation(
      req.body,
      (req as any).user.id as string
    );
    res.status(201).json(education);
  } catch (error: any) {
    next(error);
  }
};

export const deleteEducationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteEducation(req.params.id as string);
    res.status(200).json({ message: "Education deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};
