import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
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
    skills: mongoose.Types.ObjectId[];
    projects: mongoose.Types.ObjectId[];
    education: mongoose.Types.ObjectId[];
    experience: mongoose.Types.ObjectId[];
    blogs: mongoose.Types.ObjectId[];
    faqs: mongoose.Types.ObjectId[];
  };
}

const DataSchema = new Schema(
  {
    role: { type: String, required: true },
    years_of_experience: { type: Number, required: true },
    number_of_projects: { type: Number, required: true },
    description: { type: String, required: true },
    resumeLink: { type: String, required: true },
    cvLink: { type: String, required: true },
    instaLink: { type: String, required: true },
    gitLink: { type: String, required: true },
    linkdinLink: { type: String, required: true },
    image: { type: String, required: true },
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill", required: true }],
    projects: [{ type: Schema.Types.ObjectId, ref: "Project", required: true }],
    education: [
      { type: Schema.Types.ObjectId, ref: "Education", required: true },
    ],
    experience: [
      { type: Schema.Types.ObjectId, ref: "Experience", required: true },
    ],
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog", required: true }],
    faqs: [{ type: Schema.Types.ObjectId, ref: "Faq", required: true }],
  },
  { _id: false }
);

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    data: { type: DataSchema, required: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
