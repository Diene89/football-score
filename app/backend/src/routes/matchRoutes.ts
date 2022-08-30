import { Router } from 'express';
import MatchController from '../controllers/matchController';
import MatchService from '../services/matchService';

const matchService = new MatchService();
const matchController = new MatchController(matchService);

const teamRouter = Router();

teamRouter.get('/', async (req, res) => matchController.getAll(req, res));

export default teamRouter;
