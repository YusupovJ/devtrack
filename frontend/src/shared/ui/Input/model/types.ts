import type { ComponentProps, HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import type { FieldError } from "react-hook-form";

export interface IInputProps extends ComponentProps<"input"> {
  error?: boolean | FieldError;
}

export interface IInputTextProps extends IInputProps {}
export interface IInputPasswordProps extends IInputProps {}

export interface IInputLabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {}
export interface IInputDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface IInputContext {
  error?: boolean | FieldError;
  id?: string;
}

export interface IInputRootProps extends ComponentProps<"div">, IInputContext {
  children?: ReactNode;
}
