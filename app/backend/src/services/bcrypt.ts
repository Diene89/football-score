import * as bcrypt from 'bcryptjs';

export default class PasswordService {
  static decryptedPassword(dbPassword: string, reqPassword: string): boolean {
    const compare = bcrypt.compareSync(reqPassword, dbPassword);
    return compare;
  }
}