import Blog, { IBlog } from "../models/blog";
import { IBlogs } from "../types/blog";
import { ExpressError } from "../utils/ExpressError";

export const createBlog = async (data: IBlogs): Promise<IBlog> => {
  const blog = new Blog(data);
  return await blog.save();
};

export const findAll = async (owner: string): Promise<IBlog[]> => {
  return await Blog.find({ owner: owner });
};

export const findBlogById = async (id: string): Promise<IBlog | null> => {
  return await Blog.findById(id);
};

export const deleteBlogById = async (id: string): Promise<void> => {
  await Blog.findByIdAndDelete(id);
};

export const changeShow = async (id: string): Promise<IBlog> => {
  const blog = await Blog.findById(id);
  if (!blog) throw new ExpressError(500, "Blog not found");

  blog.show = !blog.show;
  return await blog.save();
};
