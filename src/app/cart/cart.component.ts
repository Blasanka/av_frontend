import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: any;
  interval: any;
  totalValue: any;
  flatRate: any = 0;
  cart: Cart;
  resourcesBaseUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.cart = new Cart(1, [], 0, 0, 0);
    const cartItems = this.getCartItems();
    if (cartItems != null && cartItems.length === 0) {
      Swal.fire({
        title: 'Your Cart Is Empty',
        imageUrl: './../../assets/img/emptycart.png',
        imageWidth: 400,
        imageHeight: 300,
        text: name,
        footer: '<a href="">Lets Shopping</a>'
      });
    } else {
      cartItems.forEach( (element) => {
        const itemTotal = element.quantity * element.price;
        const cartItem = (new CartItem(element.id, element, itemTotal));
        this.cart.cartItems.push(cartItem);
        this.cart.subTotal += cartItem.itemTotal;
        this.calcCartTotal(cartItem);
      });
      this.getCartShippingCost();
      this.getCartSubTotal();
      this.getCartTotal();
    }
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('Items'));
  }

  getCartShippingCost() {
    const data = JSON.parse(localStorage.getItem('cartShipping'));
    if (data && data > 0) {
      this.cart.shippingCost = data;
    }
  }

  getCartSubTotal() {
    const data = JSON.parse(localStorage.getItem('cartSubTotal'));
    if (data && data > 0) {
      this.cart.subTotal = data;
    }
  }

  getCartTotal() {
    const data = JSON.parse(localStorage.getItem('CartTotal'));
    if (data && data > 0) {
      this.cart.cartTotal = data;
    }
  }

  removeData(id, attachment, name) {

    Swal.fire({
      title: 'Are you sure want to remove ' + name,
      imageUrl: this.resourcesBaseUrl + attachment[0],
      imageWidth: 200,
      imageHeight: 200,
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        for (let i = 0; i < this.cart.cartItems.length; i++) {
          if (this.cart.cartItems[i].id === id) {
            const removedItem = this.cart.cartItems.splice(i, 1);
            this.cart.subTotal -= removedItem[0].itemTotal;
            this.cart.cartTotal -= removedItem[0].itemTotal;
            this.updateCart();
            this.decreaseStorageQuantityOnCart(removedItem[0].product.quantity);
          }
        }
        if (this.cart.cartItems.length === 0) {
          localStorage.removeItem('cartSubTotal');
          localStorage.removeItem('cartShipping');
          localStorage.removeItem('CartTotal');
          localStorage.removeItem('Items');
          localStorage.removeItem('quantity');
        }
        Swal.fire(
          'Deleted!',
          'Your item has been removed.',
          'success'
        );
      }
    });
  }

  updateCart() {
    localStorage.setItem('cartSubTotal', JSON.stringify(this.cart.subTotal));
    localStorage.setItem('cartShipping', JSON.stringify(this.cart.shippingCost));
    localStorage.setItem('CartTotal', JSON.stringify(this.cart.cartTotal));

    const tempArr = [];
    let qty = 0;
    this.cart.cartItems.forEach( (element) => {
      tempArr.push(element.product);
      qty += element.product.quantity;
    });
    localStorage.setItem('Items', JSON.stringify(tempArr));

    // Swal.fire({
    //   icon: 'success',
    //   title: 'Cart Updated...',
    //   text: 'Your cart has been updated!',
    // });
  }

  addQty(productId: number) {
    const item = this.cart.cartItems.find((it) => it.id === productId);
    if (item.product.quantity >= 1) {
      item.product.quantity++;
      item.itemTotal += item.product.price;
      this.cart.subTotal += item.product.price;
      this.calcCartTotal(item);
      this.updateCart();
      this.increaseStorageQuantityOnCart();
    }
  }

  subtractQty(productId: number) {
    const item = this.cart.cartItems.find((it) => it.id === productId);
    if (item.product.quantity > 1) {
      item.product.quantity--;
      item.itemTotal -= item.product.price;
      this.cart.subTotal -= item.product.price;
      this.calcCartTotal(item);
      this.updateCart();
      this.decreaseStorageQuantityOnCart(1);
    }
  }

  calcCartTotal(item) {
    this.cart.flatRate = this.cart.flatRate * item.product.quantity;
    this.cart.shippingCost = item.product.quantity * this.cart.shippingCost;
    this.cart.cartTotal = this.cart.subTotal - this.cart.flatRate + this.cart.shippingCost;
  }

  increaseStorageQuantityOnCart() {
    const currentQty = localStorage.getItem('quantity');
    if (currentQty != null) {
      const newQty = Number.parseInt(currentQty, 10) + 1;
      localStorage.setItem('quantity', JSON.stringify(newQty));
    } else {
      localStorage.setItem('quantity', JSON.stringify(1));
    }
  }

  decreaseStorageQuantityOnCart(num: number) {
    const currentQty = localStorage.getItem('quantity');
    if (currentQty != null) {
      const newQty = Number.parseInt(currentQty, 10) - num;
      localStorage.setItem('quantity', JSON.stringify(newQty));
    } else {
      localStorage.setItem('quantity', JSON.stringify(1));
    }
  }
}
