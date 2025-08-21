import {
  createFaq,
  findFaqById,
  deleteFaqById,
  findAll,
} from "../repositories/faq";
import { faqSchema, FaqInput } from "../validators/faq";
import { IFaqs } from "../types/faq";
import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

export const getFaqsService = async (owner: string): Promise<IFaqs[]> => {
  return await findAll(owner);
};

export const addFaq = async (data: FaqInput, owner: string): Promise<IFaqs> => {
  const parsed = faqSchema.safeParse(data);
  if (!parsed.success) {
    throw new ExpressError(
      500,
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }
  return await createFaq({
    question: parsed.data.question,
    answer: parsed.data.answer,
    owner: new mongoose.Types.ObjectId(owner),
  });
};

export const deleteFaq = async (id: string): Promise<void> => {
  const faq = await findFaqById(id);
  if (!faq) throw new ExpressError(500, "Faq not found");

  await deleteFaqById(id);
};
