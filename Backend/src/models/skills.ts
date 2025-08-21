import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface ISkill extends Document {
  name: string;
  image: string;
  show: boolean;
  category: string;
  title: string;
  owner: mongoose.Types.ObjectId;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    show: { type: Boolean, default: false },
    category: { type: String, required: true },
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

SkillSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.skills": doc._id },
  });
});

SkillSchema.post("findOneAndDelete", async function (doc: ISkill) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.skills": doc._id },
    });
  }
});

export default mongoose.model<ISkill>("Skill", SkillSchema);
