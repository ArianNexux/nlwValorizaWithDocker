import { EntityRepository, Repository } from 'typeorm'
import User from '../entities/User'

@EntityRepository(User)
export default class UserRepositories extends Repository<User> {

    

} 