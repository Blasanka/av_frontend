import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private getHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return headers;
   }

  login(data) {
    return this.http.post(this.baseurl + '/login', data, { headers: this.getHeaders() });
  }

  setSession(authResult) {
    const expiresAt = moment().add(authResult.data.expires_at, 'second');
    localStorage.setItem('access_token',authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('username', authResult.data.username);
    localStorage.setItem('userRole', 'customer');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
  }

  public isUserLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isUserLoggedIn();
  }

  getExpiration(): moment.Moment {
    const expiration = localStorage.getItem('expires_at');
    const date = new Date(Number.parseInt(expiration, 10) * 1000);
    return moment(date);
  }

  requestVerifyCode(data) {
    return this.http.post(this.baseurl + '/request-code', data, { headers: this.getHeaders() });
  }

  register(data) {
    return this.http.post(this.baseurl + '/register', data, { headers: this.getHeaders() });
  }

  getUserDetails() {
    return this.http.get(this.baseurl + '/user', { headers: this.getHeaders() });
  }

}
