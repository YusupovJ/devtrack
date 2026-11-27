import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto.js";
import { UserService } from "../user/user.service.js";
import { JWTService } from "../../common/services/jwt.service.js";
import { ITokenPayload } from "../../common/types/index.js";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Session } from "./entities/session.entity.js";
import { RegisterDto } from "./dto/register.dto.js";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JWTService,
    @InjectRepository(Session) private sessionRepo: Repository<Session>,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    const session = this.sessionRepo.create({ user });

    return await this.createSession(user.id, session);
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userService.create(registerDto);
    const session = this.sessionRepo.create({ user });

    return await this.createSession(user.id, session);
  }

  private async createSession(userId: number, session: Session) {
    const payload: ITokenPayload = {
      userId,
      sessionId: session.id,
    };

    const accessToken = this.jwtService.signToken(payload, "20m");
    const refreshToken = this.jwtService.signToken(payload, "15d");

    session.refreshToken = refreshToken;
    await this.sessionRepo.save(session);

    return { accessToken, refreshToken };
  }
}
