import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Введите почту").pipe(z.email("Неверная почта")),
  password: z.string().min(1, "Введите пароль").min(8, "Пароль должен состоять хотя бы из 8 символов"),
});
