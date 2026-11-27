import { Request } from "express";

export interface ITokenPayload {
  userId: number;
  sessionId: number;
}

export interface AuthRequest extends Request {
  payload: ITokenPayload;
}
