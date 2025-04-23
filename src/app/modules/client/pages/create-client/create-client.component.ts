import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ICreateClient } from '../../interfaces/client.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-create-client',
    standalone: false,
    templateUrl: './create-client.component.html',
    styleUrl: './create-client.component.scss'
})
export class CreateClientComponent {

    public name: string = '';
    public email: string = '';
    public phone: string = '';

    constructor(
        private Client: ClientService,
        private DialogRef: MatDialogRef<CreateClientComponent>,
        private SnackBar: MatSnackBar
    ){}

    create(){
        const cliet: ICreateClient = {
            name: this.name,
            email: this.email,
            phone: this.phone
        }

        this.Client.create(cliet)
        .subscribe({
            next: (data) => {
                this.DialogRef.close(true);
                this.SnackBar.open('Client Created!', 'Close');
            },
            error: (error) => {
                this.SnackBar.open(error.error.error, 'Close');
            }
        });
    }
}
