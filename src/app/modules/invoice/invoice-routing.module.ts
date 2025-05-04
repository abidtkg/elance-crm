import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './pages/update-invoice/update-invoice.component';
import { ViewInvoiceComponent } from './pages/view-invoice/view-invoice.component';

const routes: Routes = [
    { path: '', component: InvoicesComponent },
    { path: 'create', component: CreateInvoiceComponent },
    { path: 'update/:id', component: UpdateInvoiceComponent },
    { path: 'view/:id', component: ViewInvoiceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceRoutingModule { }
