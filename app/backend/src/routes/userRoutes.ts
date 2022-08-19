import { Router } from 'express';
import UserController from '../controllers/userController';
// import UserService from '../services/userService';

// const userService = new UserService;
const userController = new UserController();

const router = Router();

router.post('/', (req, res) => userController.login(req, res))

export default router;
