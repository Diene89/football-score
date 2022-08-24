import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { ILogin } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'secret';

export default class createToken {
  static async jwt(param: ILogin): Promise<string> {
    const token = sign(param, secret);

    return token;
  }

  static async validateToken(token: string | undefined): Promise<string | JwtPayload> {
    if (!token) {
      const err = new Error('Invalid Token');
      err.message = 'Unauthorized|401';
      throw err;
    }
    try {
      const user = verify(token, secret) as ILogin;
      return user;
    } catch (error) {
      const err = new Error('Expired or invalid token');
      err.message = 'Unauthorized|401';
      throw err;
    }
  }
}
