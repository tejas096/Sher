import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IEducation extends Document {
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear?: string;
  owner: mongoose.Types.ObjectId;
}

const EducationSchema = new Schema<IEducation>(
  {
    school: { type: String, required: true },
    degree: { type: String, required: true },
    field: { type: String, required: true },
    startYear: { type: String, required: true },
    endYear: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

EducationSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.education": doc._id },
  });
});

EducationSchema.post("findOneAndDelete", async function (doc: IEducation) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.education": doc._id },
    });
  }
});

export default mongoose.model<IEducation>("Education", EducationSchema);
