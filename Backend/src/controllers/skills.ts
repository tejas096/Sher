import { NextFunction, Request, Response } from "express";
import {
  addSkill,
  deleteSkill,
  getSkillsService,
  toggleShow,
} from "../services/skills";

export const getSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skills = await getSkillsService((req as any).user.id as string);
    res.status(200).json(skills);
  } catch (error: any) {
    next(error);
  }
};

export const createSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skill = await addSkill(
      req.body,
      req.file as Express.Multer.File,
      (req as any).user.id as string
    );
    res.status(201).json(skill);
  } catch (error: any) {
    next(error);
  }
};

export const deleteSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteSkill(req.params.id as string);
    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};

export const toggleSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await toggleShow(req.params.id as string);
    return res.status(200).json({ message: "Skills updated successfully" });
  } catch (error: any) {
    next(error);
  }
};
