import z from "zod";
import { PASSWORD_RULES } from "../constants";

export const registerSchema = z.object({
  fullName: z.string().trim().min(1, "Введите имя"),
  email: z.string().trim().min(1, "Введите почту").pipe(z.email("Неверная почта")),
  password: z.string().superRefine((val, ctx) => {
    PASSWORD_RULES.forEach((rule) => {
      if (!rule.test(val)) ctx.addIssue({ code: "custom", message: rule.label });
    });
  }),
});
