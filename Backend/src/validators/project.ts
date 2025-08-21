import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  techStack: z.array(
    z.string().regex(/^[a-fA-F0-9]{24}$/, "Must be valid ObjectId")
  ),
  githubLink: z.string().url("Must be a valid URL"),
  liveLink: z.string().url("Must be a valid URL"),
  show: z.boolean().optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
