import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class UserController {
  constructor(private leaderboardService: LeaderboardService) { }

  listTeams = async (req: Request, res: Response): Promise<void | string> => {
    const list = await this.leaderboardService.order();

    res.status(200).json(list);
  };
}
