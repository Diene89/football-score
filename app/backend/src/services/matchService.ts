import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { IMatch } from '../interfaces/IMatch';

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
    console.log(matches);
    return matches;
  };
}
