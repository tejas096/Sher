import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IProject extends Document {
  title: string;
  description: string;
  techStack: mongoose.Types.ObjectId[];
  githubLink: string;
  liveLink: string;
  show: boolean;
  image: string;
  owner: mongoose.Types.ObjectId;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    githubLink: { type: String, required: true },
    liveLink: { type: String, required: true },
    image: { type: String, required: true },
    show: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

ProjectSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.projects": doc._id },
  });
});

ProjectSchema.post("findOneAndDelete", async function (doc: IProject) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.projects": doc._id },
    });
  }
});

export default mongoose.model<IProject>("Project", ProjectSchema);
