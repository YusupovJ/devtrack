import { AuthLayout } from "../../../shared/layouts/AuthLayout";
import { AuthLink } from "../../../shared/ui/AuthLink";
import { RegisterCard } from "../../../widgets/RegisterCard";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterCard />
      <AuthLink label="Уже есть аккаунт?" linkLabel="Войти" to="/auth/login" />
    </AuthLayout>
  );
};
