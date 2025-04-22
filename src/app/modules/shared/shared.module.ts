import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        SidebarComponent,
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatMenuModule
    ],
    exports: [
        SidebarComponent,
        ConfirmationComponent
    ]
})
export class SharedModule { }
