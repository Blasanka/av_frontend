import { Component, OnInit } from '@angular/core';
import { MessangerWishlistService } from '../service/messengerWishlist.service';
import { Product } from '../models/product';
import { CartItemsService } from '../service/cart-items.service'
import { isNull } from 'util';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-wishlist-cart',
  templateUrl: './wishlist-cart.component.html',
  styleUrls: ['./wishlist-cart.component.css']
})
export class WishlistCartComponent implements OnInit {

  //cartItems = []=JSON.parse(localStorage.getItem('Items'));
  cartItems = [];
  cartTotal = 0;
  constructor(private msgw: MessangerWishlistService, private cartItemService: CartItemsService) { }

  ngOnInit() {

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
          if(this.cartItems[i].productId == product.id){
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
        imageUrl: product.imageURL1,
        imageWidth: 200,
        imageHeight: 200,
        text: product.product_name,
        footer: '<a href="/cart">View Wishlist</a>'
      })
      this.cartItems.push({
            productId:   product.id,
            product_name: product.product_name,
            quantity: 1,
            imageURL1:product.imageURL1,
            imageURL2:product.imageURL2,
            price: product.price
            })
          
    }
  
  

    // if(this.cartItems.length ===0){
    //   this.cartItems.push({
    //     productId:   product.id,
    //     product_name: product.product_name,
    //     quantity: 1,
    //     price: product.price
    //     })
    // }else{
    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].productId == product.id){
    //       this.cartItems[i].quantity++
    //     }else{
     
  
    //   this.cartItems.push({
    //     productId:   product.id,
    //     product_name: product.product_name,
    //     quantity: 1,
    //     price: product.price
    //     })
    //   }
    //   }
    // }

    // this.cartTotal = 0;
    // this.cartItems.forEach(item => {
    //   this.cartTotal += (item.quantity * item.price);
    
    // })
    localStorage.setItem('WishlistItems',JSON.stringify(this.cartItems));
    // localStorage.setItem('WishlistTotal',JSON.stringify(this.cartTotal));
    localStorage.setItem('WishlistQuantity',JSON.stringify(this.cartItems.length));
  }

  

}
