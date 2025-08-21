import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IFaq extends Document {
  question: string;
  answer: string;
  owner: mongoose.Types.ObjectId;
}

const FaqSchema = new Schema<IFaq>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

FaqSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.faqs": doc._id },
  });
});

FaqSchema.post("findOneAndDelete", async function (doc: IFaq) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.faqs": doc._id },
    });
  }
});

export default mongoose.model<IFaq>("Faq", FaqSchema);
