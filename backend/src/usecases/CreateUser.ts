import IUserRequest from './interfaces/IUserRequest'
import { UserRepositories } from '../repositories/UserRepositories'
class CreateUser {

    async handle({ name, email, admin}: IUserRequest) {
        const userRepository = new UserRepositories();
        if(!email){
            throw new Error("incorrect email")
        }

        const userAlreadyExists = await userRepository.findOne({ 
            email
         })

         if(userAlreadyExists){
             throw new Error("user already exists")
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