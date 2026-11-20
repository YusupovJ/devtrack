import type { ComponentProps, HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export type TInputStatus = "default" | "error";

export interface IInputProps extends ComponentProps<"input"> {
  status?: TInputStatus;
}

export interface IInputTextProps extends IInputProps {}
export interface IInputPasswordProps extends IInputProps {}

export interface IInputLabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {}
export interface IInputDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface IInputContext {
  status?: TInputStatus;
  id?: string;
}

export interface IInputRootProps extends ComponentProps<"div">, IInputContext {
  children?: ReactNode;
}
