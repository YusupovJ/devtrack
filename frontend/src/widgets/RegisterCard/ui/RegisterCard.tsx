import { LoginOAuth } from "../../../features/oauth";
import { RegisterForm } from "../../../features/RegisterForm";
import { Card } from "../../../shared/ui/Card";
import { Divider } from "../../../shared/ui/Divider";

export const RegisterCard = () => {
  return (
    <Card>
      <h1 className="text-2xl">Создайте аккаунт</h1>
      <p className="mt-2 text-sm text-text-2">Первая задача через пару шагов</p>
      {/* TEMP: Add RegisterOAuth after oauth logic will be added */}
      <LoginOAuth className="mt-4" />
      <Divider>или по почте</Divider>
      <RegisterForm />
    </Card>
  );
};
