import { Link } from "react-router";
import { RegisterCard } from "../widgets/RegisterCard";
import { AuthLayout } from "./layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterCard />
      <p className="text-text-3 mt-5 text-sm">
        Уже есть аккаунт?{" "}
        <Link className="link" to="/auth/login">
          Войти
        </Link>
      </p>
    </AuthLayout>
  );
};
