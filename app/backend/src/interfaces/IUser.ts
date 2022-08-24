import { JwtPayload } from 'jsonwebtoken';

export interface ILogin {
  email: string,
  password: string,
}

export interface IRole {
  role: string | JwtPayload,
}

export interface IUser extends ILogin, IRole {
  id: number,
  username: string,
}
