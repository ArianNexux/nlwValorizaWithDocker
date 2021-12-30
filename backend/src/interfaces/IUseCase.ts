import  IUserRequest  from './IUserRequest';

interface IUseCase{
    handle(useRequest: IUserRequest): Promise<Response>
}

export default IUseCase;