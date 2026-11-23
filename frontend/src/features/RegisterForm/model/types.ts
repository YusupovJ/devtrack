import type z from "zod";
import type { registerSchema } from "./schema";

export interface IRegisterFormProps {
  onSuccess?: () => void;
}

export type TRegisterFormValue = z.infer<typeof registerSchema>;
