import { getCustomRepository } from 'typeorm'
import  IUseCase  from '../interfaces/IUseCase'
import IUserRequest from '../interfaces/IUserRequest'
import TagRepositories  from '../repositories/TagRepositories'

export class CreateTags implements IUseCase {
    
    async handle({name, email, admin}: IUserRequest):Promise<any>{
        let tags = getCustomRepository(TagsRepositories)



    }
}