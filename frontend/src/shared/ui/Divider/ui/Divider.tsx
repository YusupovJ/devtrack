import clsx from "clsx";
import type { IDividerProps } from "../model/types";

export const Divider = ({ children, className }: IDividerProps) => {
  return (
    <div role="separator" className={clsx("flex gap-3 items-center my-5", className)}>
      <div className="grow h-px bg-border" />
      <p className="text-sm text-text-3">{children}</p>
      <div className="grow h-px bg-border" />
    </div>
  );
};
