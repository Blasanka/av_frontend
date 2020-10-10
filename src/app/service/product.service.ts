import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  BASE_URL = environment.baseUrl;

  private getHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return headers;
   }

   login(data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.post(`${this.BASE_URL}+login`, data, { headers });
  }

  setSession(authResult) {
    console.log(authResult.token);
    const expiresAt = moment().add(authResult.data.expires_at, 'second');
    localStorage.setItem('access_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('username', authResult.data.username);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getProducts(): Observable<Product[]> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Product[]>(`${this.BASE_URL}/products`, { headers })
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getFeaturedProducts(): Observable<Product[]> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Product[]>(`${this.BASE_URL}/products/latest`, { headers })
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(id): Observable<Product> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`, { headers })
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError<Product>('getProducts', null))
      );
  }

  getRelatedProducts(subCategoryId: any, productId: any): Observable<Product> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Product>(`${this.BASE_URL}/products/related/${subCategoryId}?productId=${productId}`, { headers })
      .pipe(
        tap(_ => console.log('fetched related products')),
        catchError(this.handleError<Product>('getRelatedProducts', null))
      );
  }

  getMayLikeProducts(categoryId: any, productId: any): Observable<Product> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Product>(`${this.BASE_URL}/products/may-like/${categoryId}?productId=${productId}`, { headers })
      .pipe(
        tap(_ => console.log('fetched may like products')),
        catchError(this.handleError<Product>('getMayLikeProducts', null))
      );
  }

  search(data: any): Observable<Product[]> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.post<Product[]>(`${this.BASE_URL}/search/products`, data, { headers })
      .pipe(
        tap(_ => console.log('fetched filtered products')),
        catchError(this.handleError<Product[]>('search', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
