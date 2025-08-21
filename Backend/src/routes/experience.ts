import { Router } from "express";
import {
  createExperienceController,
  deleteExperienceController,
  getExperiences,
  toggleExperience,
} from "../controllers/experience";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getExperiences)
  .post(tokenValidate, createExperienceController);

router
  .route("/:id")
  .delete(tokenValidate, deleteExperienceController)
  .put(tokenValidate, toggleExperience);

export default router;
