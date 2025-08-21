import { Router } from "express";
import { cloudUpload } from "../middlewares/cloudUploads";
import {
  createSkillController,
  deleteSkillController,
  getSkills,
  toggleSkill,
} from "../controllers/skills";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getSkills)
  .post(tokenValidate, cloudUpload.single("image"), createSkillController);
router
  .route("/:id")
  .delete(tokenValidate, deleteSkillController)
  .put(tokenValidate, toggleSkill);

export default router;
