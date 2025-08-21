import { Types } from "mongoose";

export interface IEducations {
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear?: string;
  owner: Types.ObjectId;
}
