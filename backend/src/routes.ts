import { Router } from 'express';
import CreateUserController   from './controllers/CreateUserController'
import CreateTagController from './controllers/CreateTagController'
import ensureIsAdmin from './middlewares/ensureIsAdmin';
import AuthenticateUserController from './controllers/AuthenticateUserController'
const router = Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authController = new AuthenticateUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureIsAdmin ,createTagController.handle);
router.post('/login', authController.handle);


export default router;

