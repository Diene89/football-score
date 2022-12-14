import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { IBodyMatch, IGoals, IMatch, IMessage } from '../interfaces/IMatch';

export default class MatchService implements IMatch {
  private match;
  constructor() { this.match = Match; }
  inProgress: boolean;
  teamHome?: { teamName: string; } | undefined;
  teamAway?: { teamName: string; } | undefined;
  id?: number | undefined;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;

  getAll = async (): Promise<IMatch[]> => {
    const matches = await this.match.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
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
          as: 'teamHome',
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

  finishMatch = async (id: string): Promise<IMessage> => {
    await this.match.update(
      { inProgress: false },
      { where: { id } },
    );
    return { message: 'Finished' };
  };

  findOne = async (id: string): Promise<IMatch | null> => {
    const dbMatch = await this.match.findByPk(id);
    return dbMatch;
  };

  updateGoals = async (id: string, data: IGoals): Promise<IMessage> => {
    const { homeTeamGoals, awayTeamGoals } = data;
    await this.match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return { message: 'updated scoreboard' };
  };
}
