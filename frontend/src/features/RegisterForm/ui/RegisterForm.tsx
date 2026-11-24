import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import type { IRegisterFormProps, TRegisterFormValue } from "../model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../model/schema";
import { PasswordRules } from "./PasswordRules";
import { useNavigate } from "react-router";

export const RegisterForm = (props: IRegisterFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<TRegisterFormValue>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TRegisterFormValue> = (values) => {
    console.log(values);
    navigate("/auth/confirm-email", {
      state: { email: values.email },
    });
    props.onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <Input.Root error={errors.fullName}>
        <Input.Label>Имя</Input.Label>
        <Input placeholder="John Doe" autoComplete="name" {...register("fullName")} />
        <Input.Description>{errors.fullName?.message}</Input.Description>
      </Input.Root>

      <Input.Root error={errors.email}>
        <Input.Label>Почта</Input.Label>
        <Input placeholder="example@gmail.com" autoComplete="email" {...register("email")} />
        <Input.Description>{errors.email?.message}</Input.Description>
      </Input.Root>

      <Input.Root error={errors.password}>
        <div className="flex justify-between">
          <Input.Label>Пароль</Input.Label>
        </div>
        <Input.Password placeholder="••••••••" autoComplete="new-password" {...register("password")} />
        <PasswordRules control={control} isSubmitted={isSubmitted} />
      </Input.Root>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
};
