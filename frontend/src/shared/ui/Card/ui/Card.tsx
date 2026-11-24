import clsx from "clsx";
import type { ICardProps } from "../model/types";

export const Card = ({ className, children }: ICardProps) => {
  return (
    <div className={clsx("border border-border rounded-xl bg-bg py-8 px-6 w-full max-w-[440px] shadow-xs", className)}>
      {children}
    </div>
  );
};
