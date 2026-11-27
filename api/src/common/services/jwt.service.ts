import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import jwt, { type SignOptions } from "jsonwebtoken";
import { type ITokenPayload } from "../types/index.js";

@Injectable()
export class JWTService {
  private jwtSecret: string;
  constructor(private configService: ConfigService) {
    this.jwtSecret = this.configService.getOrThrow<string>("jwtSecret");
  }

  signToken(payload: ITokenPayload, expiresIn: SignOptions["expiresIn"]): string {
    return jwt.sign(payload, this.jwtSecret, { expiresIn });
  }

  verifyToken(accessToken: string): ITokenPayload | undefined {
    try {
      return jwt.verify(accessToken, this.jwtSecret, { algorithms: ["HS256"] }) as ITokenPayload;
    } catch {
      return;
    }
  }
}
