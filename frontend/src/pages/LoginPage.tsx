import { Input } from "../shared/ui/Input";

export const LoginPage = () => {
  return (
    <main>
      <h1>Login page</h1>
      <Input.Root>
        <Input.Label>Password</Input.Label>
        <Input.Password className="max-w-[300px]" />
        <Input.Description>bla</Input.Description>
      </Input.Root>
    </main>
  );
};
