import { z } from "zod";

export const faqSchema = z.object({
  question: z.string().min(10, "Question is required"),
  answer: z.string().min(10, "Answer is required"),
});

export type FaqInput = z.infer<typeof faqSchema>;
