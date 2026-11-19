import type { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export type TInputStatus = "default" | "error";

export interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: TInputStatus;
}

export interface IInputLabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {}
export interface IInputDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
export interface IInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {}
