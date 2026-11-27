import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JWTService } from "../services/jwt.service.js";
import { InjectRepository } from "@nestjs/typeorm";
import { Session } from "../../modules/auth/entities/session.entity.js";
import { Repository } from "typeorm";
import { AuthRequest } from "../types/index.js";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JWTService,
    @InjectRepository(Session) private sessionRepo: Repository<Session>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<AuthRequest>();

    const [type, accessToken] = req.headers.authorization?.split(" ") ?? [];
    if (type !== "Bearer" || !accessToken) {
      throw new UnauthorizedException("Access token not provided");
    }

    const payload = this.jwtService.verifyToken(accessToken);
    if (!payload) {
      throw new UnauthorizedException("Invalid access token");
    }

    const session = await this.sessionRepo.findOne({
      where: {
        id: payload.sessionId,
        user: { id: payload.userId },
      },
    });

    if (!session) {
      throw new UnauthorizedException("Invalid session");
    }

    req.payload = payload;
    return true;
  }
}
