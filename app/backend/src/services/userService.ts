import * as Joi from 'joi';
import { ILogin, IUser } from '../interfaces/IUser';
import User from '../database/models/User';
import createToken from '../middlewares/createToken';
import PasswordService from './bcrypt';

export default class UserService implements ILogin {
  private user;
  constructor() { this.user = User; }
  email: string;
  password: string;

  validateBody = async (data: ILogin): Promise<ILogin> => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(data);
    return result;
  };

  findOne = async (email: string): Promise<User | null> => {
    const dbUser = await this.user.findOne({
      where: { email },
      raw: true,
    });
    return dbUser;
  };

  login = async ({ email, password }: ILogin) => {
    this.validateBody({ email, password });
    const user: IUser | null = await this.findOne(email);

    if (!user) throw new Error();
    const compare = PasswordService.encryptedPassword(user.password, password);
    if (compare === true) {
      const token = createToken.jwt({ email, password });
      return token;
    }
  };
}
