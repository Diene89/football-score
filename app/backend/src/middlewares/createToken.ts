import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'secret';

export default class createToken {
  static async jwt(param: ILogin): Promise<string> {
    const token = sign(param, secret);

    return token;
  }
}
