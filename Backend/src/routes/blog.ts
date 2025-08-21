import { Router } from "express";
import { cloudUpload } from "../middlewares/cloudUploads";
import {
  createBlogController,
  deleteBlogController,
  getBlogs,
  toggleBlog,
} from "../controllers/blog";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getBlogs)
  .post(tokenValidate, cloudUpload.single("image"), createBlogController);

router
  .route("/:id")
  .delete(tokenValidate, deleteBlogController)
  .put(tokenValidate, toggleBlog);

export default router;
