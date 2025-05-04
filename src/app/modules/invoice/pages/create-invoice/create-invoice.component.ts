import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { InvoiceService } from '../../services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../../dialogs/add-product/add-product.component';
import { IInvoiceProduct } from '../../interfaces/invoice.interface';
import { ConfirmationComponent } from '../../../shared/dialogs/confirmation/confirmation.component';

@Component({
    selector: 'app-create-invoice',
    standalone: false,
    templateUrl: './create-invoice.component.html',
    styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent implements OnInit {

    public client: string = '';
    public products: IInvoiceProduct[] = [];
    public clients: any[] = [];
    public status: string = '';
    public note: string = '';

    constructor(
        private Title: Title,
        private Invoice: InvoiceService,
        private Dialog: MatDialog
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Create Invoice - ${appName}`);
        this.Invoice.customers()
        .subscribe({
            next: (data) => {
                this.clients = data.data;
            }
        });
    }

    addProduct(){
        const dialogRef = this.Dialog.open(AddProductComponent, {
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            const payload = {
                id: result._id,
                name: result.name,
                price: result.price,
                quantity: 1
            }
            this.products.push(payload);
        });
    }

    removeProduct(id: string) {
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: `Are you sure you want to remove the product?` }
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result == true){
                const newList = [];
                for(let product of this.products){
                    if(product.id != id){
                        newList.push(product);
                    }
                }
                this.products = [];
                this.products = newList;
            }
        });
    }
}
