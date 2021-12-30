import { Router } from 'express';
import CreateUserController   from './controllers/CreateUserController'
import { CreateUser } from './usecases/CreateUser'



const router = Router();

const createUserController = new CreateUserController(new CreateUser)
router.post('/users', createUserController.handle);


export default router;

