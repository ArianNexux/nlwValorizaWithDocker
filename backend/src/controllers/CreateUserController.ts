
import { Request, Response } from 'express'
import IUseCase from '../interfaces/IUseCase'
import { CreateUser } from '../usecases/CreateUser'
class CreateUserController {

    
    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const { name, email, admin } = request.body;
            
            const createUserService = new CreateUser();
            const user = await createUserService.handle({name, email, admin})

            return response.json(user)

        
        } catch(err){
            return response.status(400).json({message:err.message})
        }
    }

}

export default CreateUserController;