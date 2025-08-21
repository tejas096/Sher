import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string().min(2, "Company is required"),
  position: z.string().min(2, "Position is required"),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid start date format (use YYYY-MM-DD)",
  }),
  show: z.boolean().optional(),
  endDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid end date format (use YYYY-MM-DD)",
    }),
  description: z.string().min(10, "description is required"),
});

export type ExperienceInput = z.infer<typeof experienceSchema>;
