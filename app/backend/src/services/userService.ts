// import * as Joi from 'joi';
import { ILogin, IUser } from '../interfaces/IUser';
import User from '../database/models/User';
import createToken from '../middlewares/createToken';
import PasswordService from './bcrypt';

export default class UserService implements ILogin {
  private user;
  constructor() { this.user = User; }
  email: string;
  password: string;

  //   validateBody = async (data: unknown): Promise<IUser> => {
  //     const schema = Joi.object({
  //       email: Joi.string().required(),
  //       password: Joi.string().required(),
  //     });
  //     const result = await schema.validateAsync(data);
  //     return result;
  //   };
  findOne = async (email: string): Promise<User | null> => {
    const dbUser = await this.user.findOne({
      where: { email },
      raw: true,
    });
    return dbUser;
  };

  login = async ({ email, password }: ILogin) => {
    const user: IUser | null = await this.findOne(email);
    console.log(user);

    if (!user) throw new Error();
    const andre = PasswordService.encryptedPassword(user.password, password);
    console.log(andre);

    //    const e = new Error();
    //    e.name = 'NotFoundError';
    //    e.message = 'User not found';
    //    throw e;
    const token = createToken.jwt({ email, password });
    return token;
  };
}
