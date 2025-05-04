import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-product',
    standalone: false,
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {

    public products: any[] = [];
    public product: any;

    constructor(
        private Product: ProductService,
        private DialogRef: MatDialogRef<AddProductComponent>,
        private SnackBar: MatSnackBar
    ){}

    ngOnInit(): void {
        this.Product.products()
        .subscribe({
            next: (data) => {
                this.products = data;
            }
        });
    }

    save(){
        if(this.product) {
            this.DialogRef.close(this.product);
        }else{
            this.SnackBar.open('Product not seleted!', 'Close');
        }
    }
}
