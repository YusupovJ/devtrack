import clsx from "clsx";
import { Button } from "../../../shared/ui/Button";
import type { ILoginOAuthProps } from "../model/types";
import GoogleIcon from "../../../shared/icons/google.svg?react";
import GithubIcon from "../../../shared/icons/github.svg?react";
import TelegramIcon from "../../../shared/icons/telegram.svg?react";

export const LoginOAuth = ({ className }: ILoginOAuthProps) => {
  return (
    <div className={clsx("flex gap-3 w-full", className)}>
      <Button className="grow" icon={<GoogleIcon className="size-4 fill-text-2" />} variant="secondary">
        Google
      </Button>
      <Button className="grow" icon={<GithubIcon className="size-4 fill-text-2" />} variant="secondary">
        GitHub
      </Button>
      <Button className="grow" icon={<TelegramIcon className="size-4 fill-text-2" />} variant="secondary">
        Telegram
      </Button>
    </div>
  );
};
