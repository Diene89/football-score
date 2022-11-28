import { QueryTypes } from 'sequelize';
import sequelize from '../database/models/index';
import query from '../middlewares/query';

export default class LeaderboardService {
  listAll = async () => {
    const leaderboardHome = await
    sequelize.query(query, { type: QueryTypes.SELECT });
    return leaderboardHome;
  };

  order = async () => {
    const orderLearderBoard = await this.listAll();
    const order = orderLearderBoard.sort((a: any, b: any) => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      if (a.goalsOwn !== b.goalsOwn) return b.goalsOwn - a.goalsOwn;
      return 0;
    });
    return order;
  };
}
