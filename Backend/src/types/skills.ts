import { Types } from "mongoose";

export interface ISkill {
  name: string;
  image: string;
  title: string;
  show?: boolean;
  category: string;
  owner: Types.ObjectId;
}
