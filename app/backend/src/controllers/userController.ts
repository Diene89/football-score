import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService: UserService) { }

  login = async (req: Request, res: Response): Promise<void> => {
    const token = await this.userService.login(req.body);

    res.status(200).json({ token });
  };
}
