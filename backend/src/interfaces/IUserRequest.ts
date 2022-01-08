interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?:boolean;
}

export default IUserRequest