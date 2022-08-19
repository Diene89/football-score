import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService: UserService) { }

  async login(req: Request, res: Response): Promise<void> {
    console.log('entreiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');

    const user = await this.userService.login(req.body);

    res.status(200).json(user);
  }
}
