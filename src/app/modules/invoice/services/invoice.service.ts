import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, skip, throwError } from 'rxjs';
import { ICreateInvoice } from '../interfaces/invoice.interface';
import { server } from '../../../app.config';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    private server: string = server;
    
    constructor(
        private http: HttpClient
    ) { }

    create(invoice: ICreateInvoice): Observable<any> {
        return this.http.post<any>(`${this.server}/invoice/create`, invoice)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    findOne(id: string): Observable<any> {
        return this.http.get<any>(`${this.server}/invoice/findone/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    delete(id: string): Observable<any> {
        return this.http.delete<any>(`${this.server}/invoice/delete/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    customers(): Observable<any> {
        return this.http.get<any>(`${this.server}/client/clients/0/500`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
