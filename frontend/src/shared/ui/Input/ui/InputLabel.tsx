import clsx from "clsx";
import type { IInputLabelProps } from "../model/types";

export const InputLabel = ({ children, className, ...props }: IInputLabelProps) => {
  return (
    <label className={clsx("block text-sm mb-1", className)} {...props}>
      {children}
    </label>
  );
};
