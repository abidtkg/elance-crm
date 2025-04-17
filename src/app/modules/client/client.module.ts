import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';


@NgModule({
  declarations: [
    ClientsComponent,
    CreateClientComponent,
    UpdateClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
