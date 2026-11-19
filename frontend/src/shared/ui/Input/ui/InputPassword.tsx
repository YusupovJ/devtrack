import clsx from "clsx";
import type { IInputPasswordProps } from "../model/types";
import { InputText } from "./InputText";
import { Button } from "../../Button";
import { EyeIcon } from "lucide-react";

export const InputPassword = ({ className, ...props }: IInputPasswordProps) => {
  return (
    <div className={clsx("relative inline-block", className)}>
      <InputText type="password" className="pr-10" {...props} />
      <Button
        type="button"
        variant="silent"
        size="icon"
        aria-label="Show password"
        className="absolute top-1/2 -translate-y-1/2 right-2.5"
      >
        <EyeIcon size="16px" />
      </Button>
    </div>
  );
};
