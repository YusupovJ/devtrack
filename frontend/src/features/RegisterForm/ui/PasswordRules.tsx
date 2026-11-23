import { PASSWORD_RULES } from "../constants";
import type { IPasswordRulesProps } from "../model/types";
import { CheckIcon, MinusIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import { useWatch } from "react-hook-form";

export const PasswordRules = ({ control, touched, isSubmitted }: IPasswordRulesProps) => {
  const value = useWatch({ control, name: "password" });

  if (!value && !isSubmitted) return null;

  return (
    <ul className="flex flex-col gap-0.5 mt-1.5">
      {PASSWORD_RULES.map((rule) => {
        const isValid = rule.test(value || "");
        const isError = !isValid && (touched || isSubmitted);

        return (
          <li
            className={clsx(
              "flex items-center gap-1",
              isError ? "text-danger" : isValid ? "text-success" : "text-text-3",
            )}
            key={rule.label}
          >
            {isError ? <XIcon size="18px" /> : isValid ? <CheckIcon size="18px" /> : <MinusIcon size="18px" />}{" "}
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
};
