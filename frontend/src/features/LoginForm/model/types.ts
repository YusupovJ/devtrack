import z from "zod";
import type { loginSchema } from "./schema";

export type TLoginFormValue = z.infer<typeof loginSchema>;

export interface ILoginFormProps {
  onSuccess?: () => void;
}
