import { Link } from "react-router";
import { RegisterCard } from "../widgets/RegisterCard";

export const RegisterPage = () => {
  return (
    <main className="min-h-dvh py-8 flex flex-col items-center justify-center">
      <RegisterCard />
      <p className="text-text-3 mt-5 text-sm">
        Уже есть аккаунт?{" "}
        <Link className="link" to="/auth/login">
          Войти
        </Link>
      </p>
    </main>
  );
};
