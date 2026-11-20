import clsx from "clsx";
import "./button.tailwind.css";
import type { IButtonProps } from "../model/types";

export const Button = ({ children, className, variant = "primary", size = "medium", icon, ...props }: IButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center select-none outline-border-strong justify-center rounded-lg font-semibold transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-80",
        `button-variant-${variant}`,
        `button-size-${size}`,
        className,
      )}
      type="button"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
