import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-inquiry-cart-view',
  templateUrl: './inquiry-cart-view.component.html',
  styleUrls: ['./inquiry-cart-view.component.css']
})
export class InquiryCartViewComponent implements OnInit {

  id: any;
  interval: any;
  totalValue: any;
  flatRate: any = 0;
  inqueryCart: Cart;
  resourcesBaseUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.inqueryCart = new Cart(1, [], 0, 0, 0);
    const inqueryItems = this.getInqueryItems();
    if (inqueryItems != null && inqueryItems.length === 0) {
      Swal.fire({
        title: 'Your Inquery Cart Is Empty',
        imageUrl: './../../assets/img/emptycart.png',
        imageWidth: 400,
        imageHeight: 300,
        text: name,
        footer: '<a href="">Lets Shopping</a>'
      });
    } else {
      inqueryItems.forEach( (element) => {
        const itemTotal = element.quantity * element.price;
        const cartItem = (new CartItem(element.id, element, itemTotal));
        this.inqueryCart.cartItems.push(cartItem);
        this.inqueryCart.subTotal += cartItem.itemTotal;
        this.calcCartTotal(cartItem);
      });
      this.getCartSubTotal();
      this.getCartTotal();
    }
  }

  getInqueryItems() {
    return JSON.parse(localStorage.getItem('InquiryItems'));
  }

  getCartSubTotal() {
    const data = JSON.parse(localStorage.getItem('cartSubTotal'));
    if (data && data > 0) {
      this.inqueryCart.subTotal = data;
    }
  }

  getCartTotal() {
    const data = JSON.parse(localStorage.getItem('CartTotal'));
    if (data && data > 0) {
      this.inqueryCart.cartTotal = data;
    }
  }

  removeData(prod, image, name) {
    Swal.fire({
      title: 'Are you sure want to remove ' + name,
      imageUrl: this.resourcesBaseUrl + image[0],
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
        const index = this.inqueryCart.cartItems.indexOf(prod, 0);
        if (index > -1) {
          const removedItem = this.inqueryCart.cartItems.splice(index, 1);
          this.updateCart();
          this.inqueryCart.subTotal -= removedItem[0].itemTotal;
          this.inqueryCart.cartTotal -= removedItem[0].itemTotal;
          localStorage.setItem('InquiryQuantity', JSON.stringify(removedItem[0].product.quantity));
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
    localStorage.setItem('InquirySubTotal', JSON.stringify(this.inqueryCart.subTotal));
    localStorage.setItem('InquiryTotal', JSON.stringify(this.inqueryCart.cartTotal));

    const tempArr = [];
    this.inqueryCart.cartItems.forEach( (element) => {
      tempArr.push(element.product);
    });
    localStorage.setItem('InquiryItems', JSON.stringify(tempArr));
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Cart Updated...',
    //   text: 'Your cart has been updated!',
    // });
  }

  addQty(productId: number) {
    const item = this.inqueryCart.cartItems.find((it) => it.id === productId);
    if (item.product.quantity >= 1) {
      item.product.quantity++;
      item.itemTotal += item.product.price;
      this.inqueryCart.subTotal += item.product.price;
      this.calcCartTotal(item);
      this.updateCart();
      localStorage.setItem('InquiryQuantity', JSON.stringify(item.product.quantity));
    }
  }

  subtractQty(productId: number) {
    const item = this.inqueryCart.cartItems.find((it) => it.id === productId);
    if (item.product.quantity > 1) {
      item.product.quantity--;
      item.itemTotal -= item.product.price;
      this.inqueryCart.subTotal -= item.product.price;
      this.calcCartTotal(item);
      this.updateCart();
      localStorage.setItem('InquiryQuantity', JSON.stringify(item.product.quantity));
    }
  }

  calcCartTotal(item) {
    this.inqueryCart.flatRate = this.inqueryCart.flatRate * item.product.quantity;
    this.inqueryCart.shippingCost = item.product.quantity * this.inqueryCart.shippingCost;
    this.inqueryCart.cartTotal = this.inqueryCart.subTotal - this.inqueryCart.flatRate + this.inqueryCart.shippingCost;
  }

}
