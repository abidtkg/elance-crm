import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { map, merge, startWith, switchMap } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/client.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateClientComponent } from '../create-client/create-client.component';
import { ConfirmationComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-clients',
    standalone: false,
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss'
})
export class ClientsComponent implements AfterViewInit {

    public clients: IClient[] = [];
    public isLoadingResults: boolean = false;
    public dataLimit: number = 20;
    public total_data: number = 0;

    constructor(
        private Title: Title,
        private Client: ClientService,
        private Dialog: MatDialog,
        private SnackBar: MatSnackBar
    ){}
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.Title.setTitle(`Clients - ${appName}`);
        this.paginator.pageIndex = 0;
        
        merge(this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
                this.isLoadingResults = true;
                return this.Client!.clients(
                    this.paginator.pageIndex,
                    this.dataLimit,
                );
            }),
            map(data => {
                this.isLoadingResults = false;
                if (data === null) {
                    return [];
                }
                
                this.total_data = data.total;
                return data.data;
            }),
        ).subscribe(data => (this.clients = data));
    }

    reloadData(){
        this.Client.clients(this.paginator.pageIndex, this.dataLimit)
        .subscribe({
            next: (data) => {
                this.clients = data.data;
                this.total_data = data.total;
            }
        });
    }

    handlePageEvent(event: any){
        this.dataLimit = event.pageSize;
    }

    createClient(){
        const dialogRef = this.Dialog.open(CreateClientComponent, {
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.reloadData();
            }
        });
    }


    delete(id: string) {
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: `Are you sure you want to delte?` }
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result == true){
                this.Client.delete(id)
                .subscribe({
                    next: (data) => {
                        this.reloadData();
                        this.SnackBar.open('Client delete success!', 'Close');
                    },
                    error: (error) => {
                        this.SnackBar.open(error.error.error, 'Close');
                    }
                });
            }
        });
    }

}
