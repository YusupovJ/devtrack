import { useId, useMemo } from "react";
import type { IInputRootProps } from "../model/types";
import { InputContext } from "./context";
import clsx from "clsx";

export const InputRoot = ({ children, className, status, id, ...props }: IInputRootProps) => {
  const generatedId = useId();
  const value = useMemo(() => ({ status, id: id ?? generatedId }), [status, id, generatedId]);

  return (
    <InputContext.Provider value={value}>
      <div className={clsx("flex flex-col w-full", className)} {...props}>
        {children}
      </div>
    </InputContext.Provider>
  );
};
