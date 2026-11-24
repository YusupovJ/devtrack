import { Logo } from "../../../ui/Logo";
import type { IAuthLayoutProps } from "../model/types";

export const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <main className="min-h-dvh py-8 flex flex-col items-center justify-center">
      <Logo className="mb-5" />
      {children}
    </main>
  );
};
