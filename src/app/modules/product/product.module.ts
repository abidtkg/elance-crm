import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateProductComponent } from './dialogs/create-product/create-product.component';
import { CreateCategoryComponent } from './dialogs/create-category/create-category.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ProductsComponent,
        CategoriesComponent,
        CreateProductComponent,
        CreateCategoryComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        MatDialogModule,
        FormsModule
    ]
})
export class ProductModule { }
