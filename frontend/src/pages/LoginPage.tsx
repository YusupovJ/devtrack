import { Link } from "react-router";
import { LoginCard } from "../widgets/LoginCard";
import { AuthLayout } from "./layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginCard />
      <p className="text-text-3 mt-5 text-sm">
        Нет аккаунта?{" "}
        <Link className="link" to="/auth/register">
          Зарегистрироваться
        </Link>
      </p>
    </AuthLayout>
  );
};
