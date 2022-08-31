export interface IGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IBodyMatch extends IGoals {
  id?: number;
  homeTeam: number;
  awayTeam: number;
}

export interface IMessage {
  message: string,
}

export interface IMatch extends IBodyMatch {
  inProgress: boolean;
  teamHome?: {
    teamName: string;
  }
  teamAway?: {
    teamName: string;
  }
}
