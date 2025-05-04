import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { server } from '../../../app.config';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private server: string = server;
    
    constructor(
        private http: HttpClient
    ) { }

    products(): Observable<any[]> {
        return this.http.get<any[]>(`${this.server}/product/products`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
