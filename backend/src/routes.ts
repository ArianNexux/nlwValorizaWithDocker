import { Router } from 'express';
import CreateUserController   from './controllers/CreateUserController'
import { CreateUser as CreateUserUseCase } from './usecases/CreateUser'



const router = Router();

const createUserController = new CreateUserController()

router.post('/users', createUserController.handle);


export default router;

