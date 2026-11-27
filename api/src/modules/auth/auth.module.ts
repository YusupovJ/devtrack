import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller.js";
import { UserModule } from "../user/user.module.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Session } from "./entities/session.entity.js";
import { JWTService } from "../../common/services/jwt.service.js";

@Module({
  imports: [TypeOrmModule.forFeature([Session]), UserModule],
  controllers: [AuthController],
  providers: [AuthService, JWTService],
})
export class AuthModule {}
