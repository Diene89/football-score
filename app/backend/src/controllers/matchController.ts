import { Request, Response } from 'express';
import createToken from '../middlewares/createToken';
import MatchService from '../services/matchService';

export default class MatchController {
  constructor(private matchService: MatchService) { }

  getAll = async (req: Request, res: Response): Promise<void | string> => {
    const match = await this.matchService.getAll();

    res.status(200).json(match);
  };

  getInProgress = async (req: Request, res: Response): Promise<void | string> => {
    const { inProgress } = req.query;
    const matches = await this.matchService.getInProgress(inProgress === 'true');

    res.status(200).json(matches);
  };

  create = async (req: Request, res: Response): Promise<void | string> => {
    const token = req.headers.authorization;
    await createToken.validateToken(token);

    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      const e = new Error('NotFoundError');
      e.message = 'It is not possible to create a match with two equal teams|401';
      throw e;
    }
    const match = await this.matchService.create(req.body);

    res.status(201).json(match);
  };

  finishMatch = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const message = await this.matchService.finishMatch(id);

    res.status(200).json(message);
  };
}
