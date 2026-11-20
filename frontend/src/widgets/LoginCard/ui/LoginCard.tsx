import { Link } from "react-router";
import { LoginOAuth } from "../../../features/oauth";
import { Divider } from "../../../shared/ui/Divider";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";

export const LoginCard = () => {
  return (
    <div className="border border-border rounded-xl bg-bg py-8 px-6 w-full max-w-[440px] shadow-xs">
      <h2>С возвращением</h2>
      <p className="mt-2 text-sm text-text-2">Войдите, чтобы открыть свои задачи</p>
      <LoginOAuth className="mt-4" />
      <Divider>или по почте</Divider>

      <div className="space-y-5">
        <Input.Root>
          <Input.Label>Почта</Input.Label>
          <Input placeholder="vy@example.com" />
        </Input.Root>

        <Input.Root>
          <div className="flex justify-between">
            <Input.Label>Пароль</Input.Label>
            <Link className="link" to="/auth/forgot-password">
              Забыли пароль?
            </Link>
          </div>
          <Input.Password placeholder="••••••••" />
        </Input.Root>
        <Button className="w-full">Войти</Button>
      </div>
    </div>
  );
};
