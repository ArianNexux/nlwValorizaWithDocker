import { Request, Response } from "express"
import AuthenticateUser from "../usecases/AuthenticateUser"
export default class AuthenticateUserController{

    async handle(request: Request, response: Response): Promise<any>{
        
        const { email, password } = request.body

        const authUser = new AuthenticateUser()

        const token = await authUser.handle({email, password})

        return token
    }
}