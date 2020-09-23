import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor() { }

  addItem(cartItem) {
    let cartItems = [];
    if (localStorage.getItem('Items')) {
        cartItems = JSON.parse(localStorage.getItem('Items'));
        cartItems = [cartItem, ...cartItems];
      } else {
        cartItems = [cartItem];
      }
    localStorage.setItem('Items', JSON.stringify(cartItems));
    }

  getItemFromClass() {
    return JSON.parse(localStorage.getItem('Items'));
  }

  updateCartCount() {
    return JSON.parse(localStorage.getItem('Items'));
  }

}
