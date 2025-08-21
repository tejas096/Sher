import { z } from "zod";
import mongoose from "mongoose";

export const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),

  data: z
    .object({
      role: z.string().min(2, "Role is required"),
      years_of_experience: z
        .number()
        .min(0, "Years of experience must be positive"),
      number_of_projects: z
        .number()
        .min(0, "Number of projects must be positive"),
      description: z.string().min(10, "Description is too short"),
      resumeLink: z.string().url("Resume must be a valid URL"),
      cvLink: z.string().url("CV must be a valid URL"),
      instaLink: z.string().url("Instagram link must be valid"),
      gitLink: z.string().url("GitHub link must be valid"),
      linkdinLink: z.string().url("LinkedIn link must be valid"),
      skills: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Skill ObjectId",
        })
      ),
      projects: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Project ObjectId",
        })
      ),
      education: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Education ObjectId",
        })
      ),
      experience: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Experience ObjectId",
        })
      ),
      blogs: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Blog ObjectId",
        })
      ),
      faqs: z.array(
        z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Faq ObjectId",
        })
      ),
    })
    .optional(),
});

export type UserInput = z.infer<typeof userSchema>;
