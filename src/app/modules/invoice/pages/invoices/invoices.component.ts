import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';

@Component({
    selector: 'app-invoices',
    standalone: false,
    templateUrl: './invoices.component.html',
    styleUrl: './invoices.component.scss'
})
export class InvoicesComponent implements AfterViewInit {
    clients = [];

    constructor(
        private Title: Title,
    ){}

    ngAfterViewInit(): void {
        this.Title.setTitle(`Invoices - ${appName}`);
    }


}
