import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { InvoiceService } from '../../services/invoice.service';
import { IInvoiceListItem } from '../../interfaces/invoice.interface';

@Component({
    selector: 'app-invoices',
    standalone: false,
    templateUrl: './invoices.component.html',
    styleUrl: './invoices.component.scss'
})
export class InvoicesComponent implements AfterViewInit {

    public invoices: IInvoiceListItem[] = [];

    constructor(
        private Title: Title,
        private Invoice: InvoiceService
    ){}

    ngAfterViewInit(): void {
        this.Title.setTitle(`Invoices - ${appName}`);
        this.reloadData();
    }


    reloadData(){
        this.Invoice.invoices(0, 100)
        .subscribe({
            next: (data) => {
                this.invoices = data.data;
            }
        });
    }


}
