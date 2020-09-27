import { Component, OnInit } from '@angular/core';
import { MessangerWishlistService } from '../service/messengerWishlist.service';
import { Product } from '../models/product';
import { CartItemsService } from '../service/cart-items.service'
import { isNull } from 'util';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-wishlist-cart',
  templateUrl: './wishlist-cart.component.html',
  styleUrls: ['./wishlist-cart.component.css']
})
export class WishlistCartComponent implements OnInit {

  //cartItems = []=JSON.parse(localStorage.getItem('Items'));
  cartItems = [];
  cartTotal = 0;
  resourcesBaseUrl: string;
  
  constructor(private msgw: MessangerWishlistService, private cartItemService: CartItemsService) { }

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;

    if(!isNull(JSON.parse(localStorage.getItem('WishlistItems')))){
      this.cartItems = []=JSON.parse(localStorage.getItem('WishlistItems'));
    }

    this.msgw.getMsgWishlist().subscribe((product: Product) => {
    this.addProductToCart(product);
  })
  }

  addProductToCart(product: Product){
    let productExists = false
    for(let i in this.cartItems){
          if(this.cartItems[i].id == product.id){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You alredy added to wishlist!',
              footer: '<a href>Why do I have this issue?</a>'
            })
            productExists = true
            return 0;
          }
        }
    if(!productExists){
      Swal.fire({
        title: 'One Item Added To Wishlist',
        icon: 'success',
        imageUrl: this.resourcesBaseUrl + product.attachment[0],
        imageWidth: 200,
        imageHeight: 200,
        text: product.product_name,
        footer: '<a href="/cart">View Wishlist</a>'
      })
      this.cartItems.push({
            id:   product.id,
            product_name: product.product_name,
            quantity: 1,
            imageUrl:product.attachment,
            price: product.price
            });
    }

    localStorage.setItem('WishlistItems',JSON.stringify(this.cartItems));
    // localStorage.setItem('WishlistTotal',JSON.stringify(this.cartTotal));
    localStorage.setItem('WishlistQuantity',JSON.stringify(this.cartItems.length));
  }

  

}
