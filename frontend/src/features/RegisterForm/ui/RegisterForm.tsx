import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import type { IRegisterFormProps, TRegisterFormValue } from "../model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../model/schema";

export const RegisterForm = (props: IRegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<TRegisterFormValue>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<TRegisterFormValue> = (values) => {
    console.log(values);
    props.onSuccess?.();
  };

  console.log(errors);

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
        {touchedFields.password && (
          <Input.Description>
            <span></span>
            <span></span>
            <span></span>
          </Input.Description>
        )}
      </Input.Root>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
};
