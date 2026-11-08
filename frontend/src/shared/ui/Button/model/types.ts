import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TButtonVariant = "primary" | "secondary" | "silent" | "danger";
export type TButtonSize = "medium" | "small";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: TButtonVariant;
  size?: TButtonSize;
  icon?: ReactNode;
  loading?: boolean;
}
