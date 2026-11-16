import { PartialType, PickType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto.js";

export class UpdateUserDto extends PartialType(PickType(CreateUserDto, ["fullName"] as const)) {}
