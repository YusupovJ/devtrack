import clsx from "clsx";
import type { IInputTextProps } from "../model/types";

export const InputText = ({ status, className, ...props }: IInputTextProps) => {
  return (
    <input
      className={clsx(
        "border rounded-lg px-2.5 py-1.5 text-sm bg-surface w-full",
        status === "error" ? "border-danger focus:outline-danger" : "border-border focus:outline-border-strong",
      )}
      {...props}
    />
  );
};
