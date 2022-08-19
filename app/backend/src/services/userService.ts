// import * as Joi from 'joi';
import { compare } from 'bcryptjs';
import createToken from '../middlewares/createToken';
// import createToken from '../middlewares/createToken';
import User from '../database/models/User';
import { IUser } from '../interfaces/IUser';
// import createToken from '../middlewares/createToken';

export default class UserService implements IUser {
  private user;
  constructor() { this.user = User; }
  email: string;
  password: string;

  //    async validateBody(data: unknown) {
  //     const schema = Joi.object({
  //         email: Joi.string().required(),
  //         password: Joi.string().required(),

  //     })
  //         const { error, value } = schema.validate(data);
  //         if (error) throw error;
  //         return value;

  //    }

  async login({ email, password }: IUser): Promise<string | null> {
    console.log(email, 'emaiiiiiiiiiiil');
    console.log(password, 'passwooooooooooord');
    const dbUser = await this.user.findOne({
      where: { email, password },
      raw: true,
    });

    console.log(dbUser);

    if (!dbUser || !compare(dbUser.passaword, password)) throw new Error();
    //    const e = new Error();
    //    e.name = 'NotFoundError';
    //    e.message = 'User not found';
    //    throw e;
    const token = createToken.jwt({ email, password });
    return token;
  }
}
