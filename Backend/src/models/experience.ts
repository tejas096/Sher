import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IExperience extends Document {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  show: boolean;
  owner: mongoose.Types.ObjectId;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    description: { type: String, required: true },
    show: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

ExperienceSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.experience": doc._id },
  });
});

ExperienceSchema.post("findOneAndDelete", async function (doc: IExperience) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.experience": doc._id },
    });
  }
});

export default mongoose.model<IExperience>("Experience", ExperienceSchema);
