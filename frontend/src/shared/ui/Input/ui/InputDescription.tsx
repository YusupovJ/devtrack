import clsx from "clsx";
import type { IInputDescriptionProps } from "../model/types";
import { useContext } from "react";
import { InputContext } from "../provider/context";

export const InputDescription = ({ children, className, ...props }: IInputDescriptionProps) => {
  const { status } = useContext(InputContext);

  if (!children) return null;

  return (
    <p
      className={clsx("text-sm mt-1 transition-colors", status === "error" ? "text-danger" : "text-text-3", className)}
      {...props}
    >
      {children}
    </p>
  );
};
