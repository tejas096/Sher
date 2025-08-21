import { NextFunction, Request, Response } from "express";
import {
  addBlog,
  deleteBlog,
  getBlogsService,
  toggleShow,
} from "../services/blog";

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogs = await getBlogsService((req as any).user.id as string);
    res.status(200).json(blogs);
  } catch (error: any) {
    next(error);
  }
};

export const createBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await addBlog(
      req.body,
      req.file as Express.Multer.File,
      (req as any).user.id as string
    );
    res.status(201).json(blog);
  } catch (error: any) {
    next(error);
  }
};

export const deleteBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteBlog(req.params.id as string);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};

export const toggleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await toggleShow(req.params.id as string);
    return res.status(200).json({ message: "Blog updated successfully" });
  } catch (error: any) {
    next(error);
  }
};
