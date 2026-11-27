import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthRequest, ITokenPayload } from "../types/index.js";

export const AuthRequired = createParamDecorator((key: keyof ITokenPayload | undefined, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<AuthRequest>();
  return key ? req.payload[key] : req.payload;
});
