export interface ILogin {
    email: string;
    password: string;
}

export interface IAuthResponse {
    token: string;
    name: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
}