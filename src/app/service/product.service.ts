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

  // products: Product[] = [

  //   new Product(11,'./../../assets/img/product/product1.jpg','./../../assets/img/product/product2.jpg','product1','testDescription',30,22,'sup1'),
  //   new Product(12,'./../../assets/img/product/product3.jpg','./../../assets/img/product/product4.jpg','product2','testDescription',40,25,'sup2'),
  //   new Product(13,'./../../assets/img/product/product5.jpg','./../../assets/img/product/product6.jpg','product3','testDescription',50,32,'sup1'),
  //   new Product(14,'./../../assets/img/product/product7.jpg','./../../assets/img/product/product8.jpg','product4','testDescription',20,11,'sup2'),
  //   new Product(52,'./../../assets/img/product/product9.jpg','./../../assets/img/product/product10.jpg','product5','testDescription',90,45,'AV'),
  //   new Product(62,'./../../assets/img/product/product11.jpg','./../../assets/img/product/product12.jpg','product6','testDescription',60,50,'AV'),

  // ]

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

  getFeaturedProducts() {

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
