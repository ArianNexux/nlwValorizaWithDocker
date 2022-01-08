
import { Request, Response } from 'express'
import IUseCase from '../interfaces/IUseCase'
import CreateUser from '../usecases/CreateUser'
class CreateUserController {

    
    async handle(request: Request, response: Response): Promise<Response>{
      
        const { name, email, admin, password } = request.body;
        
        const createUserService = new CreateUser();
        const user = await createUserService.handle({name, email, admin, password})

        return response.json(user)

    }

}

export default CreateUserController;