import clsx from "clsx";
import type { IInputDescriptionProps } from "../model/types";
import { useContext } from "react";
import { InputContext } from "../provider/context";

export const InputDescription = ({ children, className, ...props }: IInputDescriptionProps) => {
  if (!children) return null;
  const { status, id } = useContext(InputContext);

  return (
    <p
      id={id ? `${id}-description` : undefined}
      className={clsx("text-sm mt-1 transition-colors", status === "error" ? "text-danger" : "text-text-3", className)}
      {...props}
    >
      {children}
    </p>
  );
};
