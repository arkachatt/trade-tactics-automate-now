
import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  company: z.string().optional(),
  strategy: z.string().optional(),
  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
