import clsx from "clsx";
import type { IInputLabelProps } from "../model/types";
import { useContext } from "react";
import { InputContext } from "../provider/context";

export const InputLabel = ({ children, className, ...props }: IInputLabelProps) => {
  const { id } = useContext(InputContext);

  return (
    <label className={clsx("block mb-1", className)} htmlFor={id} {...props}>
      {children}
    </label>
  );
};
