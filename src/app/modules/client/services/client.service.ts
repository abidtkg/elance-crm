import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClientsRes, ICreateClient } from '../interfaces/client.interface';
import { catchError, Observable, throwError } from 'rxjs';
import { server } from '../../../app.config';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private server: string = server;
    
    constructor(
        private http: HttpClient
    ) { }


    clients(skip: number, limit: number): Observable<IClientsRes> {
        const nextSkip = skip * limit;
        return this.http.get<IClientsRes>(`${this.server}/client/clients/${nextSkip}/${limit}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    create(client: ICreateClient): Observable<any> {
        return this.http.post<any>(`${this.server}/client/create`, client)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    delete(id: string): Observable<any> {
        return this.http.delete<any>(`${this.server}/client/delete/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse){
        return throwError(() => error);
    }
}
