import { LoginOAuth } from "../../../features/oauth";
import { Divider } from "../../../shared/ui/Divider";
import { LoginForm } from "../../../features/LoginForm";
import { Card } from "../../../shared/ui/Card";

export const LoginCard = () => {
  return (
    <Card>
      <h1 className="text-2xl">Войти в аккаунт</h1>
      <p className="mt-2 text-sm text-text-2">Войдите, чтобы открыть свои задачи</p>
      <LoginOAuth className="mt-4" />
      <Divider>или по почте</Divider>
      <LoginForm />
    </Card>
  );
};
