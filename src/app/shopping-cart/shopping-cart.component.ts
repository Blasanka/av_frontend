import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../service/messanger.service';
import { Product } from '../models/product';
import { CartItemsService } from '../service/cart-items.service';
import { isNull } from 'util';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  // cartItems = []=JSON.parse(localStorage.getItem('Items'));
  cartItems = [];
  cartTotal = 0;
  constructor(private msg: MessangerService, private cartItemService: CartItemsService) { }

  ngOnInit() {
    if (!isNull(JSON.parse(localStorage.getItem('Items')))) {
      this.cartItems = [] = JSON.parse(localStorage.getItem('Items'));
    }
    this.msg.getMsg().subscribe((product: Product) => {
    this.addProductToCart(product);
  });
  }

  addProductToCart(product: Product) {
    let productExists = false;
    for (const i in this.cartItems) {
          if (this.cartItems[i].id === product.id) {
            this.cartItems[i].quantity++;
            productExists = true;
            break;
          }
        }
    if (!productExists) {
      this.cartItems.push({
        id:   product.id,
        product_name: product.product_name,
        quantity: 1,
        attachment: product.attachment,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });

    localStorage.setItem('Items', JSON.stringify(this.cartItems));
    localStorage.setItem('CartTotal', JSON.stringify(this.cartTotal));
    localStorage.setItem('quantity', JSON.stringify(this.cartItems.length));
  }
}
