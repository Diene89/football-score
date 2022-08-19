import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'secret';

export default class createToken {

    static async jwt(param: IUser): Promise<string> {
      const token = sign(param, secret);
        
      return token;
    };
}
