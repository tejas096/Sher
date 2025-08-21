import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  content: z.string().min(100, "Content must be at least 100 characters"),
  show: z.boolean().optional(),
});

export type BlogInput = z.infer<typeof blogSchema>;
