export interface IInvoiceProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface ICreateInvoice {
    client: string;
    payment_status: string;
    products: IInvoiceProduct[];
    note: string;
    discount: number;
}


export interface IInvoiceListItem {
    _id: string;
    client: {
        _id: string;
        user: string;
        name: string;
        email: string;
        phone: string;
        created: string;
        updated: string
    };
    id: number;
    payment_status: string;
    products: IInvoiceProduct[];
    note: string;
    discount: number;
    subtotal: number;
    total: number;
    created: string;
    updated: string;
}

export interface IInvoicesResponse {
    data: IInvoiceListItem[]
    total: number;
}