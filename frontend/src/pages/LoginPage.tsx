import { Link } from "react-router";
import { LoginCard } from "../widgets/LoginCard";

export const LoginPage = () => {
  return (
    <main className="min-h-dvh py-8 flex flex-col items-center justify-center">
      <LoginCard />
      <p className="text-text-3 mt-5 text-sm">
        Нет аккаунта?{" "}
        <Link className="link" to="/auth/register">
          Зарегистрироваться
        </Link>
      </p>
    </main>
  );
};
