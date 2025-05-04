import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './pages/update-invoice/update-invoice.component';
import { ViewInvoiceComponent } from './pages/view-invoice/view-invoice.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/product.service';
import { InvoiceService } from './services/invoice.service';
import { AddProductComponent } from './dialogs/add-product/add-product.component';


@NgModule({
    declarations: [
        InvoicesComponent,
        CreateInvoiceComponent,
        UpdateInvoiceComponent,
        ViewInvoiceComponent,
        AddProductComponent
    ],
    imports: [
        CommonModule,
        InvoiceRoutingModule,
        MatDialogModule,
        FormsModule,
        NgSelectModule,
        SharedModule
    ],
    providers: [
        ProductService,
        InvoiceService
    ]
})
export class InvoiceModule { }
