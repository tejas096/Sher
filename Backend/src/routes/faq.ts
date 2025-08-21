import { Router } from "express";
import {
  createFaqController,
  deleteFaqController,
  getFaqs,
} from "../controllers/faq";
import { tokenValidate } from "../middlewares/tokenValidate";
const router = Router({ mergeParams: true });

router
  .route("/")
  .get(tokenValidate, getFaqs)
  .post(tokenValidate, createFaqController);
router.route("/:id").delete(tokenValidate, deleteFaqController);

export default router;
