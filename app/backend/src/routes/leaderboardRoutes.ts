import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';
import LeaderboardService from '../services/leaderboardService';

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

const leaderboardRouter = Router();

leaderboardRouter.get('/home', async (req, res) => leaderboardController.listTeams(req, res));

export default leaderboardRouter;
