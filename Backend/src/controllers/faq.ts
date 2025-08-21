import { NextFunction, Request, Response } from "express";
import { addFaq, deleteFaq, getFaqsService } from "../services/faq";

export const getFaqs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const faqs = await getFaqsService((req as any).user.id as string);
    res.status(200).json(faqs);
  } catch (error: any) {
    next(error);
  }
};

export const createFaqController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const faq = await addFaq(req.body, (req as any).user.id as string);
    res.status(201).json(faq);
  } catch (error: any) {
    next(error);
  }
};

export const deleteFaqController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteFaq(req.params.id as string);
    res.status(200).json({ message: "Faq deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};
