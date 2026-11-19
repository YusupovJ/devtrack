import clsx from "clsx";
import type { IInputDescriptionProps } from "../model/types";

export const InputDescription = ({ children, className, ...props }: IInputDescriptionProps) => {
  return (
    <p className={clsx("text-sm mt-1 text-text-3", className)} {...props}>
      {children}
    </p>
  );
};
