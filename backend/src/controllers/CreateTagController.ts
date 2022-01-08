import { Response, Request, request } from "express";
import { CreateTags } from '../usecases/CreateTags'
export default class CresteTagController{

    async handle(request: Request, response: Response): Promise<any>{
        const { name } = request.body

        const createTags = new CreateTags()
        const tag = await createTags.handle({name})

        return response.json(tag)

    }
}