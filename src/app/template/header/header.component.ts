import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  interval:any;
  totalcartValue: any;
  quantity: any;
  cartData: any;
  totalValue: any;
  WishlistQuantity:any;
  InquryQuantity:any;
  SupplierName:any;
  constructor() { 
    
  }

  ngOnInit() {

    let menuclass = document.getElementsByClassName('categories_menu_toggle')[0];
    menuclass.classList.add("hide_main_menu"); 

    this.interval = setInterval(() => {
      this.cartData = this.getData();

      this.totalcartValue = localStorage.getItem('CartTotal');
      this.WishlistQuantity = localStorage.getItem('WishlistQuantity');
      this.SupplierName = localStorage.getItem('SupplierName');
      this.InquryQuantity = localStorage.getItem('InquiryQuantity');
      this.quantity = localStorage.getItem('quantity');
    }, 5000);
  }

getData(){
  return JSON.parse(localStorage.getItem('WishlistItems'));
  
  }
  
  visibleMainMenu(){

    let menuclass = document.getElementsByClassName('categories_menu_toggle')[0];

    if(menuclass.classList.contains("hide_main_menu")){
      menuclass.classList.add("visibe_main_menu"); 
      menuclass.classList.remove("hide_main_menu"); 
    } else{
      menuclass.classList.remove("visibe_main_menu"); 
      menuclass.classList.add("hide_main_menu");   
      }

  }

  visibleSideCart(){
    let cartclass = document.getElementsByClassName('mini_cart')[0];

    if(cartclass.classList.contains("hide_main_menu")){
      cartclass.classList.add("visible_cart"); 
      cartclass.classList.remove("hide_cart"); 
    } else{
      cartclass.classList.remove("visible_cart"); 
      cartclass.classList.add("hide_cart");   
      }
      
  }

}




