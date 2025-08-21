import { Types } from "mongoose";

export interface IUsers {
  name: string;
  email: string;
  password: string;
  data?: {
    role: string;
    years_of_experience: number;
    number_of_projects: number;
    description: string;
    resumeLink: string;
    cvLink: string;
    instaLink: string;
    gitLink: string;
    linkdinLink: string;
    image: string;
    skills: Types.ObjectId[];
    projects: Types.ObjectId[];
    education: Types.ObjectId[];
    experience: Types.ObjectId[];
    blogs: Types.ObjectId[];
    faqs: Types.ObjectId[];
  };
}
