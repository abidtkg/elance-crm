export interface ICreateProduct {
    category: string;
    name: string;
    price: number;
    description: string;
}

export interface IProduct {
    _id: string;
    user: string;
    category: {
            _id: string;
            user: string;
            name: string;
            created: string;
            updated: string;
        },
    name: string;
    price: number;
    description: string;
    created: string;
    updated: string;
}