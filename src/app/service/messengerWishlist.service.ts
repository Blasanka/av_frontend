import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessangerWishlistService {

  subject = new Subject()
  constructor() { }

  sendMsgWishlist(product){
    // console.log(product);
  this.subject.next(product) //Triggering an event
  }

  getMsgWishlist(){
  return this.subject.asObservable();
  }

}

