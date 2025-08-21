import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import skills from "./routes/skills";
import blog from "./routes/blog";
import experience from "./routes/experience";
import education from "./routes/education";
import faq from "./routes/faq";
import project from "./routes/project";
import cookieParser from "cookie-parser";
import passport from "passport";
import auth from "./routes/auth";
import { PageNotFound } from "./middlewares/pageNotFound";
import { HandleError } from "./middlewares/handleError";
import user from "./routes/user";
import "./config/passport";

const app = express();

app.use(compression());
app.use(passport.initialize());
app.use(helmet());
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/skills", skills);
app.use("/api/projects", project);
app.use("/api/blogs", blog);
app.use("/api/faqs", faq);
app.use("/api/educations", education);
app.use("/api/experiences", experience);
app.use("/api/user", user);
app.use("/api/auth", auth);

app.use(PageNotFound);
app.use(HandleError as ErrorRequestHandler);

export default app;
