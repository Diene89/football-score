import { compare } from "bcryptjs";
import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import createToken from "../middlewares/createToken";

export default class UserService implements IUser {
   email: string;
   password: string;

   async validate

   static async login(user: IUser): Promise<string> {

        const dbUser: User | null = await User.findOne({
            where: { email: user.email, password: user.password }
        })
        if (!dbUser || !compare(dbUser.passaword, user.password)) throw new Error();
    //     const e = new Error();
    //   e.name = 'NotFoundError';
    //   e.message = 'User not found';
    //   throw e;
        const token = createToken.jwt(user)
        return token
   }
}