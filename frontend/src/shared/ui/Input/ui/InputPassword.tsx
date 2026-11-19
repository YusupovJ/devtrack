import clsx from "clsx";
import type { IInputPasswordProps } from "../model/types";
import { InputText } from "./InputText";
import { Button } from "../../Button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export const InputPassword = ({ className, ref, ...props }: IInputPasswordProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className={clsx("relative", className)}>
      <InputText ref={ref} type={hidden ? "password" : "text"} className="pr-10" {...props} />
      <Button
        type="button"
        variant="silent"
        size="icon"
        aria-label={hidden ? "Show password" : "Hide password"}
        className="absolute top-1/2 -translate-y-1/2 right-1 p-1.5! hover:bg-bg!"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? <EyeIcon size="16px" /> : <EyeOffIcon size="16px" />}
      </Button>
    </div>
  );
};
