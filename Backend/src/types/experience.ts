import { Types } from "mongoose";

export interface IExperiences {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  show: boolean;
  owner: Types.ObjectId;
}
