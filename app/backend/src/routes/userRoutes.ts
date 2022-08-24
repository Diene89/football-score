import { Router } from 'express';
import UserController from '../controllers/userController';
import UserService from '../services/userService';

const userService = new UserService();
const userController = new UserController(userService);

const router = Router();

router.post('/', async (req, res) => userController.login(req, res));
router.get('/validate', async (req, res) => userController.validateToken(req, res));

export default router;
