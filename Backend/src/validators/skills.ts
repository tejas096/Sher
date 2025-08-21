import { z } from "zod";

export const skillSchema = z.object({
  name: z.string().min(2, "Skill name is required"),
  title: z.string().min(2, "Enter proper title"),
  category: z.string().min(2, "Category is required"),
  show: z.boolean().optional(),
});

export type SkillInput = z.infer<typeof skillSchema>;
