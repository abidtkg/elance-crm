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