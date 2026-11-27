import { IsEmail, IsString, Matches, MinLength } from "class-validator";
import { DIGIT_OR_SYMBOL_REGEX, UPPER_AND_LOWER_REGEX } from "../../../common/constants/index.js";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @IsString()
  @MinLength(2)
  fullName: string;

  @IsEmail()
  email: string;

  @ApiProperty({ example: "String1$" })
  @IsString()
  @MinLength(8)
  @Matches(DIGIT_OR_SYMBOL_REGEX, { message: "Password must contain digits or symbols" })
  @Matches(UPPER_AND_LOWER_REGEX, { message: "Password must contain upper or lower letters" })
  password: string;
}
