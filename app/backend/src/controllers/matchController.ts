import { Request, Response } from 'express';
import MatchService from '../services/matchService';

export default class MatchController {
  constructor(private matchService: MatchService) { }

  getAll = async (req: Request, res: Response): Promise<void | string> => {
    const match = await this.matchService.getAll();

    res.status(200).json(match);
  };
}
