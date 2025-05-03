import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ICategory } from '../../interfaces/category.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ICreateProduct } from '../../interfaces/product.interface';

@Component({
    selector: 'app-create-product',
    standalone: false,
    templateUrl: './create-product.component.html',
    styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

    public categories: ICategory[] = [];

    public category: string = '';
    public name: string = '';
    public price: number = 0;
    public description: string = '';

    constructor(
        private Product: ProductService,
        private SnackBar: MatSnackBar,
        private DialogRef: MatDialogRef<CreateProductComponent>
    ){}

    ngOnInit(): void {
        this.Product.categories()
        .subscribe({
            next: (data) => {
                this.categories = data;
            }
        });
    }

    create(){
        const product: ICreateProduct = {
            category: this.category,
            description: this.description,
            name: this.name,
            price: this.price
        };

        this.Product.createProduct(product)
        .subscribe({
            next: (data) => {
                this.SnackBar.open('Create product', 'Close');
                this.DialogRef.close(true);
            },
            error: (error) => {
                this.SnackBar.open(error.error.error, 'Close');
            }
        });
    }
}
