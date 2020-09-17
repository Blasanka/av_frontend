import { Component, OnInit } from '@angular/core';
import { MessangerInquiryService } from '../service/messangerInquiry.service';
import { Product } from '../models/product';
import { CartItemsService } from '../service/cart-items.service';
import { isNull } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inquiry-cart',
  templateUrl: './inquiry-cart.component.html',
  styleUrls: ['./inquiry-cart.component.css']
})
export class InquiryCartComponent implements OnInit {

   // cartItems = []=JSON.parse(localStorage.getItem('Items'));
   cartItems = [];
   supplier: any;
   productTotal: number;

   constructor(private msgi: MessangerInquiryService, private cartItemService: CartItemsService) { }

   ngOnInit() {

     if (!isNull(JSON.parse(localStorage.getItem('InquiryItems')))) {
       this.cartItems = [] = JSON.parse(localStorage.getItem('InquiryItems'));
     }

     this.msgi.getMsgInquiry().subscribe((product: Product) => {
     this.addProductToCart(product);
   });
   }

   addProductToCart(product: Product) {
     let productExists = false;
     for (const i in this.cartItems) {
           if (this.cartItems[i].productId === product.id) {
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'You alredy added to inquiry!',
               footer: '<a href>Why do I have this issue?</a>'
             });
             productExists = true;
             return 0;
           }
         }
     if (!productExists) {
       if (isNull(JSON.parse(localStorage.getItem('InquiryItems')))) {
        Swal.fire({
          title: 'One Item Added To Inquiry',
          icon: 'success',
          imageUrl: product.attachment,
          imageWidth: 200,
          imageHeight: 200,
          text: product.product_name,
          footer: '<a href="/inquirycart">View Inquiry</a>'
        });
        this.cartItems.push({
              productId:   product.id,
              product_name: product.product_name,
              quantity: 1,
              imageUrl: product.attachment,
              price: product.price,
              // supplier: product.supplier
              });

       } else if (!isNull(JSON.parse(localStorage.getItem('InquiryItems')))) {
        //  if(this.cartItems[0].supplier == product.supplier){
          if (this.cartItems[0] !== null) {
            Swal.fire({
              title: 'One Item Added To Inquiry',
              icon: 'success',
              imageUrl: product.attachment,
              imageWidth: 200,
              imageHeight: 200,
              text: product.product_name,
              footer: '<a href="/inquirycart">View Inquiry</a>'
            });
            this.cartItems.push({
                productId:   product.id,
                product_name: product.product_name,
                quantity: 1,
                attachment: product.attachment,
                price: product.price,
                supplier: product.supplier
            });
         } else {
          Swal.fire({
            title: 'Faield To Add Product',
            icon: 'error',
            text: 'You can only add one supplier\'s products at one time.Pleace finish the deal or clear the inquiry to add this product',
            imageUrl: product.attachment,
            imageWidth: 200,
            imageHeight: 200,
            footer: '<a href="/inquirycart">View Inquiry</a>'
          });
         }
       }
     }

     localStorage.setItem('InquiryItems', JSON.stringify(this.cartItems));
     localStorage.setItem('SupplierName', JSON.stringify(product.supplier));
     localStorage.setItem('InquiryQuantity', JSON.stringify(this.cartItems.length));
   }

   whenUpdateQty(qty: number, total: number) {
      this.productTotal = total * qty;
   }

 }

