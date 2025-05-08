import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { InvoiceService } from '../../services/invoice.service';
import { IInvoiceListItem } from '../../interfaces/invoice.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        private Invoice: InvoiceService,
        private Dialog: MatDialog,
        private SnackBar: MatSnackBar
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

    delete(invoice: IInvoiceListItem){
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: `Are you sure you want to delete invoice #${invoice.id} from '${invoice.client.name}'` }
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result == true){
                this.Invoice.delete(invoice._id)
                .subscribe({
                    next: (data) => {
                        this.reloadData();
                        this.SnackBar.open('Invoice has deleted', 'Close');
                    },
                    error: (error) => {
                        this.SnackBar.open(error.error.error, 'Close');
                    }
                });
            }
        })
    }

}
