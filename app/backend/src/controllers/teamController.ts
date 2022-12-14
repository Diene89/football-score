import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private teamService: TeamService) { }

  getAll = async (req: Request, res: Response): Promise<void | string> => {
    const teams = await this.teamService.getAll();

    res.status(200).json(teams);
  };

  getById = async (req: Request, res: Response): Promise<void | string> => {
    const { id } = req.params;
    const team = await this.teamService.getById(id);

    res.status(200).json(team);
  };
}
