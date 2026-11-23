import { LoginOAuth } from "../../../features/oauth";
import { RegisterForm } from "../../../features/RegisterForm";
import { Divider } from "../../../shared/ui/Divider";

export const RegisterCard = () => {
  return (
    <div className="border border-border rounded-xl bg-bg py-8 px-6 w-full max-w-[440px] shadow-xs">
      <h2>Создайте аккаунт</h2>
      <p className="mt-2 text-sm text-text-2">Первая задача через пару шагов</p>
      {/* TEMP: Add RegisterOAuth after oauth logic will be added */}
      <LoginOAuth className="mt-4" />
      <Divider>или по почте</Divider>
      <RegisterForm />
    </div>
  );
};
