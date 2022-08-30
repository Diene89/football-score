import Team from '../database/models/Team';
import { ITeam } from '../interfaces/ITeam';

export default class TeamService implements ITeam {
  private team;
  constructor() { this.team = Team; }
  id: number;
  teamName: string;

  getAll = async (): Promise<ITeam[]> => {
    const dbTeam: ITeam[] = await this.team.findAll();

    return dbTeam;
  };

  getById = async (id: string): Promise<ITeam | null> => {
    const dbTeam: ITeam | null = await this.team.findOne({
      where: { id },
      raw: true,
    });

    if (dbTeam === null) {
      const e = new Error('NotFoundError');
      e.message = 'Not Found|401';
      throw e;
    }
    return dbTeam;
  };
}
