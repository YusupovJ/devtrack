import clsx from "clsx";
import type { IInputTextProps } from "../model/types";
import { useContext } from "react";
import { InputContext } from "../provider/context";

export const InputText = ({ className, ref, status: propsStatus, ...props }: IInputTextProps) => {
  const { status: contextStatus, id } = useContext(InputContext);
  const status = propsStatus || contextStatus;

  return (
    <input
      id={id}
      ref={ref}
      className={clsx(
        "border rounded-lg px-2.5 py-3 text-sm bg-surface w-full text-text placeholder:text-text-3",
        status === "error" ? "border-danger focus:outline-danger" : "border-border focus:outline-border-strong",
        className,
      )}
      aria-invalid={status === "error"}
      {...props}
    />
  );
};
