import IAuthenticateUserRequest from '../interfaces/IAuthenticateUserRequest'
import { getCustomRepository } from 'typeorm'
import UserRepositories from '../repositories/UserRepositories'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
export default class AuthenticateUser {

    async handle({email, password}: IAuthenticateUserRequest){
        
        const userRepository = getCustomRepository(UserRepositories)

        const user = await userRepository.findOne({email})

        if(!user){
            throw new Error('User does not exist')
        }

        const isPasswordCorrect = await compare(password,   user.password)

        if(!isPasswordCorrect){
            throw new Error('Incorrect password')
        }

        const token = sign(
            {
                email: user.email
            },
            "0be849d0b1852f5a18a70e481257067b",
            {
                subject:user.email,
                expiresIn:'1d'
            }
        )
        
        return token;

    }
}