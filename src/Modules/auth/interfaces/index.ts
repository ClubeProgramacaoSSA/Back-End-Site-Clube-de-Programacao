import jwt from 'jsonwebtoken';

export interface IAuthentication {
    'cpf': string;
    'email': string;
    'id'?: number;
    'password': string;
    'user_id': string;
    'username': string;
}
export type IAuthenticationNoId = Omit<IAuthentication,'id'>;
export type IAuthenticationNoUserId = Omit<IAuthentication,'id' | 'user_id'>;
export type LoginResponseType = {
  id: string;
  email: string;
  username: string;
  fullname: string;
  password?: string;
};
export interface MemberJwtPayload extends jwt.JwtPayload {
  id: string;
  email: string;
  username: string;
  fullname: string;
}