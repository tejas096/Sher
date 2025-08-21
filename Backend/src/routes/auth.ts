import { Router } from "express";
import {
  confirmEmail,
  forgetPass,
  googleHandle,
  loginController,
  logoutController,
  resetPass,
  signUpController,
  verifyEmail,
} from "../controllers/auth";
import { tokenValidate } from "../middlewares/tokenValidate";
import passport from "passport";
const router = Router({ mergeParams: true });

router.post("/login", loginController);
router.post("/signup", signUpController);
router.delete("/logout", tokenValidate, logoutController);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  googleHandle
);

router.post("/forget-password", forgetPass);
router.post("/reset-password/:token", resetPass);
router.post("/verify-email", tokenValidate, verifyEmail);
router.get("/verify-email/:token", confirmEmail);

export default router;
