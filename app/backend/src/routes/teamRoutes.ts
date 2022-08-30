import { Router } from 'express';
import TeamController from '../controllers/teamController';
import TeamService from '../services/teamService';

const teamService = new TeamService();
const teamController = new TeamController(teamService);

const teamRouter = Router();

teamRouter.get('/', async (req, res) => teamController.getAll(req, res));
teamRouter.get('/:id', async (req, res) => teamController.getById(req, res));

export default teamRouter;
