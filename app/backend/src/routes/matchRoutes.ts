import { Router } from 'express';
import MatchController from '../controllers/matchController';
import MatchService from '../services/matchService';

const matchService = new MatchService();
const matchController = new MatchController(matchService);

const matchRouter = Router();

matchRouter.get('/', async (req, res) => matchController.getAll(req, res));
matchRouter.get('/search', async (req, res) => matchController.getInProgress(req, res));
matchRouter.post('/', async (req, res) => matchController.create(req, res));
matchRouter.patch('/:id/finish', async (req, res) => matchController.finishMatch(req, res));
matchRouter.patch('/:id', async (req, res) => matchController.update(req, res));

export default matchRouter;
