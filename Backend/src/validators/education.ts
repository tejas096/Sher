import { z } from "zod";

export const educationSchema = z.object({
  school: z.string().min(2, "School is required"),
  degree: z.string().min(2, "Degree is required"),
  field: z.string().min(2, "Field is required"),
  startYear: z.string().regex(/^\d{4}$/, "Start year must be YYYY"),
  endYear: z
    .string()
    .regex(/^\d{4}$/, "End year must be YYYY")
    .optional(),
});

export type EducationInput = z.infer<typeof educationSchema>;
