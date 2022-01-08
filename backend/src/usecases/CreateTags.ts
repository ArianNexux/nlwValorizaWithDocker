import { getCustomRepository } from 'typeorm'
import  IUseCase  from '../interfaces/IUseCase'
import IUserRequest from '../interfaces/IUserRequest'
import TagRepositories  from '../repositories/TagRepositories'

export class CreateTags implements IUseCase {
    
    async handle({name}):Promise<any>{
        let tagsRespositories = getCustomRepository(TagRepositories)
        console.log(name)
        if(!name){
            throw new Error("Invalid name")
        }

        const tagsAlreayExists = await tagsRespositories.findOne({ name })

        if(tagsAlreayExists){
            throw new Error("Tag name Already Exists")
        }

        const tag = tagsRespositories.create({ name })

        await tagsRespositories.save(tag)

        return tag
        



    }
}