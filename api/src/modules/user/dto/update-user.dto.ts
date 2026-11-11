import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  fullName?: string;
}
