import { Link } from "react-router";
import type { ILogoProps } from "../model/types";
import clsx from "clsx";
import LogoIcon from "../../../icons/devtrack-logo.svg?react";

export const Logo = ({ className, to = "/" }: ILogoProps) => {
  return (
    <Link className={clsx("flex items-center font-bold text-lg", className)} to={to}>
      <LogoIcon className="w-8 h-8" /> Devtrack
    </Link>
  );
};
