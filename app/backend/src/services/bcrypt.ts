import * as bcrypt from 'bcryptjs';

export default class PasswordService {
  static encryptedPassword(reqPassword: string, dbPassword: string): boolean {
    const compare = bcrypt.compareSync(reqPassword, dbPassword);
    console.log(compare, 'boolean');

    return compare;
  }
}
