import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart;

  constructor() { }

  ngOnInit() {
    this.cart = new Cart(1, [], 0, 0, 0);
    this.getCartItems().forEach( (element) => {
      const itemTotal = element.quantity * element.price;
      const cartItem = (new CartItem(element.id, element, itemTotal));
      this.cart.cartItems.push(cartItem);
    });
    this.getCartShippingCost();
    this.getCartSubTotal();
    this.getCartTotal();
    const cartEmty = this.cart.cartItems.length;
    if (cartEmty === 0) {
      Swal.fire({
        title: 'Your Cart Is Empty',
        imageUrl: './../../assets/img/emptycart.png',
        imageWidth: 400,
        imageHeight: 300,
        text: name,
        footer: '<a href="">Lets Shopping</a>'
      });
    }
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('Items'));
  }

  getCartShippingCost() {
    const data = JSON.parse(localStorage.getItem('cartShipping'));
    if (data) {
      this.cart.shippingCost = data;
    }
  }

  getCartSubTotal() {
    const data = JSON.parse(localStorage.getItem('cartSubTotal'));
    if (data) {
      this.cart.subTotal = data;
    }
  }

  getCartTotal() {
    const data = JSON.parse(localStorage.getItem('CartTotal'));
    if (data) {
      this.cart.cartTotal = data;
    }
  }
}
