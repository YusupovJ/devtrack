import { LoginOAuth } from "../../../features/oauth";
import { Divider } from "../../../shared/ui/Divider";
import { LoginForm } from "../../../features/LoginForm";

export const LoginCard = () => {
  return (
    <div className="border border-border rounded-xl bg-bg py-8 px-6 w-full max-w-[440px] shadow-xs">
      <h2>С возвращением</h2>
      <p className="mt-2 text-sm text-text-2">Войдите, чтобы открыть свои задачи</p>
      <LoginOAuth className="mt-4" />
      <Divider>или по почте</Divider>
      <LoginForm />
    </div>
  );
};
