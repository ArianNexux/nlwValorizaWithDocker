import  IUserRequest  from './IUserRequest';

interface IUseCase{
    handle(useRequest: IUserRequest): Promise<any>
}

export default IUseCase;