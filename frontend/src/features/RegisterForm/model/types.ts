import type z from "zod";
import type { registerSchema } from "./schema";
import type { Control } from "react-hook-form";

export interface IRegisterFormProps {
  onSuccess?: () => void;
}

export interface IPasswordRulesProps {
  isSubmitted: boolean;
  control: Control<TRegisterFormValue>;
}

export type TRegisterFormValue = z.infer<typeof registerSchema>;
