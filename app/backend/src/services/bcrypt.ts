import * as bcrypt from 'bcryptjs';

export default class PasswordService {
  static encryptedPassword(dbPassword: string, reqPassword: string): boolean {
    const encryptedPassword = bcrypt.hashSync(dbPassword);
    const compare = bcrypt.compareSync(reqPassword, encryptedPassword);

    return compare;
  }
}
