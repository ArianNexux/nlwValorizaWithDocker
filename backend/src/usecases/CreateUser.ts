import IUserRequest from '../interfaces/IUserRequest'
import { getCustomRepository } from 'typeorm'
import IUseCase from '../interfaces/IUseCase'
import { UserRepositories } from '../repositories/UserRepositories'
class CreateUser  implements IUseCase{

    async handle({ name, email, admin}: IUserRequest): Promise<any> {
        
        const userRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("incorrect email")
        }

        const userAlreadyExists = await userRepository.findOne({ 
            email
         })

         if(userAlreadyExists){
             throw new Error("User Already Exists")
         }

         const user = userRepository.create({
             name,
             email,
             admin
         })

         await userRepository.save(user);
         
         return user;
    }
}

export { CreateUser }