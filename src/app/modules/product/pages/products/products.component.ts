import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { IProduct } from '../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateProductComponent } from '../../dialogs/create-product/create-product.component';

@Component({
    selector: 'app-products',
    standalone: false,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

    public products: IProduct[] = [];

    constructor(
        private Title: Title,
        private Product: ProductService,
        private Dialog: MatDialog,
        private SnackBar: MatSnackBar
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Products - ${appName}`);
        this.Product.productList()
        .subscribe({
            next: (data) => {
                this.products = data;
            }
        });
    }

    create(){
        const dialogRef = this.Dialog.open(CreateProductComponent, {
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result){
                this.reloadData();
            }
        });
    }


    reloadData(){
        this.Product.productList()
        .subscribe({
            next: (data) => {
                this.products = data;
            }
        });
    }

    delete(id: string) {
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: 'Are you sure you want to delte'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.Product.deleteProduct(id)
                .subscribe({
                    next: (data) => {
                        this.SnackBar.open('Product has deleted!', 'Close');
                        this.reloadData();
                    },
                    error: (error) => {
                        this.SnackBar.open(error.error.error, 'Close');
                    }
                });
            }
        });
    }

}
