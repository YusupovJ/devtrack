import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { User } from "./entities/user.entity.js";

@Controller("user")
@ApiTags("Users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Create user" })
  @ApiCreatedResponse({ description: "Returns created user", type: User })
  @ApiConflictResponse({ description: "User already exists" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Find all users" })
  @ApiOkResponse({ description: "Returns list of users", type: [User] })
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Find user by id" })
  @ApiOkResponse({ description: "Returns found user", type: User })
  @ApiNotFoundResponse({ description: "User not found" })
  @ApiParam({ name: "id", description: "ID of the user" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update user by id" })
  @ApiOkResponse({ description: "Returns updated user", type: User })
  @ApiNotFoundResponse({ description: "User not found" })
  @ApiParam({ name: "id", description: "ID of the user" })
  update(@Param("id", ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove user by id" })
  @ApiOkResponse({ description: "Returns removed user", type: User })
  @ApiNotFoundResponse({ description: "User not found" })
  @ApiParam({ name: "id", description: "ID of the user" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
