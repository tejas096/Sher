import { Types } from "mongoose";

export interface IFaqs {
  question: string;
  answer: string;
  owner: Types.ObjectId;
}
