import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = '../assets/slider-data.json';
@Injectable({
 providedIn: 'root'
})
export class ImageSliderDataService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(URL)
 }
}