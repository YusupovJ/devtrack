import { useId, useMemo } from "react";
import type { IInputRootProps } from "../model/types";
import { InputContext } from "./context";

export const InputRoot = ({ children, status, id }: IInputRootProps) => {
  const generatedId = useId();
  const value = useMemo(() => ({ status, id: id ?? generatedId }), [status, id, generatedId]);

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};
