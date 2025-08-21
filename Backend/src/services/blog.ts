import cloudinary from "../config/cloudinary";
import { IBlog } from "../models/blog";
import { BlogInput, blogSchema } from "../validators/blog";
import {
  createBlog,
  deleteBlogById,
  findAll,
  findBlogById,
  changeShow,
} from "../repositories/blog";
import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

export const getBlogsService = async (owner: string): Promise<IBlog[]> => {
  return await findAll(owner);
};

export const addBlog = async (
  data: BlogInput,
  file: Express.Multer.File,
  owner: string
): Promise<IBlog> => {
  const parsed = blogSchema.safeParse(data);
  if (!parsed.success) {
    throw new ExpressError(
      500,
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }
  if (!file) {
    throw new ExpressError(500, "Image file is required");
  }
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "Craftfolio/blogs",
  });

  return await createBlog({
    title: parsed.data.title,
    content: parsed.data.content,
    owner: new mongoose.Types.ObjectId(owner),
    image: result.secure_url,
    show: parsed.data.show ?? false,
  });
};

export const deleteBlog = async (id: string): Promise<void> => {
  const blog = await findBlogById(id);
  if (!blog) throw new ExpressError(500, "Blog not found");

  const publicId = blog.image.split("/").pop()?.split(".")[0];
  if (publicId) {
    await cloudinary.uploader.destroy(`Craftfolio/blogs/${publicId}`);
  }

  await deleteBlogById(id);
};

export const toggleShow = async (id: string): Promise<IBlog> => {
  return await changeShow(id);
};
