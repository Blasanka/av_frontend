import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  BASE_URL = environment.baseUrl;

  private getHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return headers;
   }

   getAllSubCategories(): Observable<Category[]> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Category[]>(`${this.BASE_URL}/sub-categories`, { headers })
      .pipe(
        tap(_ => console.log('fetched sub categories')),
        catchError(this.handleError<Category[]>('getAllSubCategories', []))
      );
  }

  getAllCategories(): Observable<Category[]> {
    let headers = new HttpHeaders();
    headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`, { headers })
      .pipe(
        tap(_ => console.log('fetched categories')),
        catchError(this.handleError<Category[]>('getAllCategories', []))
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
