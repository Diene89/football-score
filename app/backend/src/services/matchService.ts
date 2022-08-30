import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { IBodyMatch, IMatch } from '../interfaces/IMatch';

export default class MatchService implements IMatch {
  private match;
  constructor() { this.match = Match; }
  inProgress: boolean;
  teamHome?: { teamName: string; } | undefined;
  teamAway?: { teamName: string; } | undefined;
  id?: number | undefined;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;

  getAll = async (): Promise<IMatch[]> => {
    const matches = await this.match.findAll({
      include: [
        {
          model: Team,
          as: 'teamAway',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });
    return matches;
  };

  getInProgress = async (inProgress: boolean): Promise<IMatch[]> => {
    const matches = await this.match.findAll({
      where: { inProgress },
      include: [
        {
          model: Team,
          as: 'teamAway',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });
    return matches;
  };

  create = async (body: IBodyMatch): Promise<IMatch> => {
    const newMatch = await this.match.create({
      ...body, inProgress: true,
    });
    return newMatch;
  };
}
