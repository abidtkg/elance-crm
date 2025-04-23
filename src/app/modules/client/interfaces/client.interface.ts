export interface ICreateClient {
    name: string;
    email: string;
    phone: string;
}

export interface IClient {
    _id: string;
    user: string;
    name: string;
    email: string;
    phone: string;
    created: string;
    updated: string;
}

export interface IClientsRes {
    data: IClient[];
    total: number;
}