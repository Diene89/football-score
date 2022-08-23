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

  validateBody = (data: ILogin) => {
    const schema = Joi.object({
      email: Joi.string().email().empty().required()
        .messages({
          'any.required': 'All fields must be filled/400',
          'string.email': 'Incorrect email or password/401',
        }),
      password: Joi.string().empty().required().messages({
        'any.required': 'All fields must be filled/400',
        'string.password': 'Incorrect email or password/401',
      }),
    });
    const { error } = schema.validate(data);
    if (error) throw error;
  };

  findOne = async (email: string): Promise<User | null> => {
    const dbUser = await this.user.findOne({
      where: { email },
      raw: true,
    });
    return dbUser;
  };

  login = async ({ email, password }: ILogin) => {
    const user: IUser | null = await this.findOne(email);

    if (!user) throw new Error();
    const compare = PasswordService.encryptedPassword(user.password, password);
    if (compare === true) {
      const token = await createToken.jwt({ email, password });
      return token;
    }
  };
}
