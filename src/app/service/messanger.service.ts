import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject();
  constructor() { }

  sendMsg(product) {
    // console.log(product);
    this.subject.next(product); // Triggering an event
  }

  getMsg() {
    return this.subject.asObservable();
  }

}

