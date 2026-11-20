import clsx from "clsx";
import type { IInputLabelProps } from "../model/types";
import { useContext } from "react";
import { InputContext } from "../provider/context";

export const InputLabel = ({ children, className, ...props }: IInputLabelProps) => {
  const { id } = useContext(InputContext);

  return (
    <label
      className={clsx("block text-sm font-medium text-text mb-1.5 select-none cursor-pointer", className)}
      htmlFor={id}
      {...props}
    >
      {children}
    </label>
  );
};
