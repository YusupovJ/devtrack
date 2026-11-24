import { LoginCard } from "../../../widgets/LoginCard";
import { AuthLayout } from "../../../shared/layouts/AuthLayout";
import { AuthLink } from "../../../shared/ui/AuthLink";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginCard />
      <AuthLink label="Нет аккаунта?" linkLabel="Зарегистрироваться" to="/auth/register" />
    </AuthLayout>
  );
};
