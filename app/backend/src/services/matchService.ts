import Match from '../database/models/Match';
import { ITeam } from '../interfaces/ITeam';

export default class TeamService implements ITeam {
  private match;
  constructor() { this.match = Match; }
  id: number;
  teamName: string;

  // getAll = async
}
