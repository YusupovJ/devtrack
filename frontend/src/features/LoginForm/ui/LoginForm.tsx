import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/ui/Input";
import { Link } from "react-router";
import { Button } from "../../../shared/ui/Button";
import type { ILoginFormProps, TLoginFormValue } from "../model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../model/schema";

export const LoginForm = (props: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginFormValue>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<TLoginFormValue> = (values) => {
    console.log(values);
    props.onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <Input.Root error={errors.email}>
        <Input.Label>Почта</Input.Label>
        <Input placeholder="example@gmail.com" autoComplete="email" {...register("email")} />
        <Input.Description>{errors.email?.message}</Input.Description>
      </Input.Root>

      <Input.Root error={errors.password}>
        <div className="flex justify-between">
          <Input.Label>Пароль</Input.Label>
          <Link className="link" to="/auth/forgot-password">
            Забыли пароль?
          </Link>
        </div>
        <Input.Password placeholder="••••••••" autoComplete="current-password" {...register("password")} />
        <Input.Description>{errors.password?.message}</Input.Description>
      </Input.Root>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};
