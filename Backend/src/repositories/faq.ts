import Faq from "../models/faq";
import { IFaqs } from "../types/faq";

export const createFaq = async (data: IFaqs): Promise<IFaqs> => {
  const faq = new Faq(data);
  return await faq.save();
};

export const findAll = async (owner: string): Promise<IFaqs[]> => {
  return await Faq.find({ owner: owner });
};

export const findFaqById = async (id: string): Promise<IFaqs | null> => {
  return await Faq.findById(id);
};

export const deleteFaqById = async (id: string): Promise<void> => {
  await Faq.findByIdAndDelete(id);
};
