import { Router } from 'express';
import MatchController from '../controllers/matchController';
import MatchService from '../services/matchService';

const matchService = new MatchService();
const matchController = new MatchController(matchService);

const matchRouter = Router();

matchRouter.get('/', async (req, res) => matchController.getAll(req, res));
matchRouter.get('/search', async (req, res) => matchController.getInProgress(req, res));
matchRouter.post('/', async (req, res) => matchController.create(req, res));

export default matchRouter;
