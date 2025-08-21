import { Router } from "express";
import {
  createEducationController,
  deleteEducationController,
  getEducations,
} from "../controllers/education";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getEducations)
  .post(tokenValidate, createEducationController);
router.route("/:id").delete(tokenValidate, deleteEducationController);

export default router;
