
import { Request, Response } from 'express'
import IUseCase from '../interfaces/IUseCase' 
class CreateUserController {
    constructor(
        private readonly createUserService: IUseCase
    ){

    }
    async handle(request: Request, response: Response) Promise<Response>{
        const { name, email, admin } = request.body;

        const user = await this.createUserService.handle({name, email, admin})

        return response.json(user)
    }
}