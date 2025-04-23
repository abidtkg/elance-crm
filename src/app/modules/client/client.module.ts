import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';
import { ClientService } from './services/client.service';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ClientsComponent,
        CreateClientComponent,
        UpdateClientComponent
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        SharedModule,
        MatDialogModule,
        MatPaginatorModule,
        FormsModule
    ],
    providers: [
        ClientService
    ]
})
export class ClientModule { }
