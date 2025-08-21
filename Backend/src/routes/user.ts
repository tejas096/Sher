import { Router } from "express";
import { tokenValidate } from "../middlewares/tokenValidate";
import { getUserData } from "../controllers/user";
const router = Router({ mergeParams: true });

router.route("/").get(tokenValidate, getUserData);

export default router;
