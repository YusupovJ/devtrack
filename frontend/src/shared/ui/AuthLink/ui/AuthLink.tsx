import { Link } from "react-router";
import type { IAuthLinkProps } from "../model/types";
import clsx from "clsx";

export const AuthLink = ({ label, to, linkLabel, className }: IAuthLinkProps) => {
  return (
    <p className={clsx("text-text-3 mt-5 text-sm", className)}>
      {label}{" "}
      <Link className="link" to={to}>
        {linkLabel}
      </Link>
    </p>
  );
};
