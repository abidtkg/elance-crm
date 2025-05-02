import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ICreateCategory } from '../../interfaces/category.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create-category',
    standalone: false,
    templateUrl: './create-category.component.html',
    styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent implements OnInit {

    public name: string = '';

    constructor(
        private Product: ProductService,
        private SnackBar: MatSnackBar,
        private DialogRef: MatDialogRef<CreateCategoryComponent>
    ){}

    ngOnInit(): void {
        
    }

    create(){
        const createCategory: ICreateCategory = {
            name: this.name
        };

        this.Product.createCategory(createCategory)
        .subscribe({
            next: (data) => {
                this.SnackBar.open('Category has created', 'Close');
                this.DialogRef.close(true);
            },
            error: (error) => {
                this.SnackBar.open(error.error.error, 'Close');
            }
        });
    }
}
