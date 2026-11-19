import { InputRoot } from "../provider/provider";
import { InputDescription } from "../ui/InputDescription";
import { InputLabel } from "../ui/InputLabel";
import { InputPassword } from "../ui/InputPassword";
import { InputText } from "../ui/InputText";

export const Input = Object.assign(InputText, {
  Password: InputPassword,
  Label: InputLabel,
  Description: InputDescription,
  Root: InputRoot,
});
