import { Types } from "mongoose";

export interface IBlogs {
  title: string;
  content: string;
  image: string;
  show: boolean;
  owner: Types.ObjectId;
}
