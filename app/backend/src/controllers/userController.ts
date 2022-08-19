import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
    // constructor(private userService: IUser) { }

    async login(req: Request, res: Response): Promise<void> {
        const token = await UserService.login(req.body);

        res.status(200).json({ token })
    }
}