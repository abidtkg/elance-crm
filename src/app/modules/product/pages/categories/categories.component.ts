import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { appName } from '../../../../app.config';
import { ConfirmationComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { CreateCategoryComponent } from '../../dialogs/create-category/create-category.component';
import { ICategory } from '../../interfaces/category.interface';

@Component({
    selector: 'app-categories',
    standalone: false,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

    public categories: ICategory[] = [];

    constructor(
        private Title: Title,
        private Product: ProductService,
        private SnackBar: MatSnackBar,
        private Dialog: MatDialog
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Categories - ${appName}`);
        this.Product.categories()
        .subscribe({
            next: (data) => {
                this.categories = data;
            }
        });
    }

    reloadData(){
        this.Product.categories()
        .subscribe({
            next: (data) => {
                this.categories = data;
            }
        });
    }

    create(){
        const dialogRef = this.Dialog.open(CreateCategoryComponent, {
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.reloadData();
            }
        })
    }

    delete(id: string) {
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: 'Are you sure you want to delete?' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.Product.deleteCategory(id)
                .subscribe({
                    next: (data) => {
                        this.SnackBar.open('Category has deleted!', 'Close');
                        this.reloadData();
                    },
                    error: (error) => {
                        this.SnackBar.open(error.error.error, 'Close');
                    }
                });
            }
        })
    }
}
