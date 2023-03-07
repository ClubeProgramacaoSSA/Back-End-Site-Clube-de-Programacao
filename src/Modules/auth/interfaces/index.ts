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
  gender: string;
  description: string | null;
  started_course_at: Date;
};