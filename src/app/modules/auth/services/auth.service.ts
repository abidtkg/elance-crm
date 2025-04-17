import { Injectable } from '@angular/core';
import { server } from '../../../app.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IAuthResponse, ILogin, IRegister } from '../interfaces/auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private server: string = server;

    constructor(
        private http: HttpClient
    ) { }

    login(user: ILogin): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`${this.server}/auth/login`, user)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    register(user: IRegister): Observable<any> {
        return this.http.post<any>(`${this.server}/auth/register`, user)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
