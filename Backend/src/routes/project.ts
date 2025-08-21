import { Router } from "express";
import { cloudUpload } from "../middlewares/cloudUploads";
import {
  createProjectController,
  deleteProjectController,
  getProjects,
  toggleProject,
} from "../controllers/project";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getProjects)
  .post(tokenValidate, cloudUpload.single("image"), createProjectController);

router
  .route("/:id")
  .delete(tokenValidate, deleteProjectController)
  .put(tokenValidate, toggleProject);

export default router;
