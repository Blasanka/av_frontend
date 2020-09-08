import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessangerInquiryService {

  subject = new Subject()
  constructor() { }

  sendMsgInquiry(product){
    // console.log(product);
  this.subject.next(product) //Triggering an event
  }

  getMsgInquiry(){
  return this.subject.asObservable();
  }

}

