import { Injectable } from '@angular/core';
import { server } from '../../../app.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ICategory, ICreateCategory } from '../interfaces/category.interface';
import { ICreateProduct, IProduct } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private server: string = server;

    constructor(
        private http: HttpClient
    ) { }


    categories(): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(`${this.server}/category/categories`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    createCategory(category: ICreateCategory): Observable<any> {
        return this.http.post<any>(`${this.server}/category/create`, category)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    deleteCategory(id: string): Observable<any> {
        return this.http.delete<any>(`${this.server}/category/delete/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    createProduct(product: ICreateProduct): Observable<any> {
        return this.http.post<any>(`${this.server}/product/create`, product)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    findProduct(id: string): Observable<any> {
        return this.http.get<any>(`${this.server}/product/findone/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }


    productList(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.server}/product/products`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    deleteProduct(id: string): Observable<any> {
        return this.http.delete<any>(`${this.server}/product/delete/${id}`)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
