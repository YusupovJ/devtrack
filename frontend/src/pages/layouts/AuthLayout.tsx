import type { PropsWithChildren } from "react";
import { Logo } from "../../shared/ui/Logo";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-dvh py-8 flex flex-col items-center justify-center">
      <Logo className="mb-5" />
      {children}
    </main>
  );
};
