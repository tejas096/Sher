import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IBlog extends Document {
  title: string;
  date: Date;
  image: string;
  content: string;
  show: boolean;
  owner: mongoose.Types.ObjectId;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String, required: true },
    content: { type: String, required: true },
    show: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

BlogSchema.post("save", async function (doc) {
  await User.findByIdAndUpdate(doc.owner, {
    $addToSet: { "data.blogs": doc._id },
  });
});

BlogSchema.post("findOneAndDelete", async function (doc: IBlog) {
  if (doc) {
    await User.findByIdAndUpdate(doc.owner, {
      $pull: { "data.blogs": doc._id },
    });
  }
});

export default mongoose.model<IBlog>("Blog", BlogSchema);
