import express from "express";
import { LoginResponseType } from "../../src/Modules/auth/interfaces";

declare global {
  namespace Express {
    interface Request {
      member?: LoginResponseType,
    }
  }
  namespace jsonwebtoken {
    export interface MemberJwtPayload extends jwt.JwtPayload {
      id: string;
      email: string;
      username: string;
      fullname: string;
    }
  }
}