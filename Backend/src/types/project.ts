import { Types } from "mongoose";

export interface IProjects {
  title: string;
  description: string;
  techStack: Types.ObjectId[];
  githubLink: string;
  liveLink: string;
  image: string;
  show: boolean;
  owner: Types.ObjectId;
}
