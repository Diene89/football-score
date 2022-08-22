import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService: UserService) { }

  login = async (req: Request, res: Response): Promise<void | string> => {
    await this.userService.validateBody(req.body);
    const token = await this.userService.login(req.body);

    res.status(200).json({ token });
  };
}
