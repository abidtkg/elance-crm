import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { appName } from '../../../../app.config';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../dialogs/confirmation/confirmation.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    standalone: false
})
export class SidebarComponent {

    public isLocal: boolean = window.location.hostname == 'localhost' ? true : false;

    constructor(
        private Dialog: MatDialog,
        private Router: Router
    ){}

    public appName: string = appName;
    
    private breakpointObserver = inject(BreakpointObserver);
    
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
        map(result => result.matches),
        shareReplay()
    );

    logOut(){
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: { message: 'Are you sure you want to logout?' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result == true){
                localStorage.clear();
                this.Router.navigate(['/auth/login']);
            }
        })
    }

    isActiveRoute(route: string): boolean {
        return this.Router.url.startsWith(route);
    }

}
