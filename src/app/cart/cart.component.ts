import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: any;
  id:any;
  interval:any;
  totalValue: any;
  cartTotal:any;
  flatRate:any = 0;

  constructor() { }

  ngOnInit(): void {
    // this.cartData = JSON.parse(localStorage.getItem('Items'));
    this.cartData = this.getData();
    this.calcCartTotal();
    let cartEmty = 0
    if((this.cartData == 0) && (cartEmty == 0)){
     
      Swal.fire({
        title: 'Your Cart Is Empty',
        imageUrl: './../../assets/img/emptycart.png',
        imageWidth: 400,
        imageHeight: 300,
        text: name,
        footer: '<a href="">Lets Shopping</a>'
      })
      cartEmty++;
    }
    
   
  }

getData(){
return JSON.parse(localStorage.getItem('Items'));

}

calculateProductTotal(){
  let productTotal = (JSON.parse(localStorage.getItem('Items')).quantity)*(JSON.parse(localStorage.getItem('Items')).itemPrice)
}

removeData(productId,image,name){

  Swal.fire({
    title: 'Are you sure want to remove '+ name,
    imageUrl:image,
    imageWidth: 200,
    imageHeight: 200,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      for(var i = 0; i<this.cartData.length;i++){
        if(this.cartData[i]["productId"] == productId){
          this.cartData.splice(i,1);
          console.log("Item removed!");
        }
      }
      Swal.fire(
        'Deleted!',
        'Your item has been removed.',
        'success'
      )
    }
  })


  
  }

  updateCart(){
    
    this.cartTotal = 0;
    this.cartData.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    
    })
    localStorage.setItem('Items',JSON.stringify(this.cartData));
    localStorage.setItem('CartTotal',JSON.stringify(this.cartTotal));
    localStorage.setItem('quantity',JSON.stringify(this.cartData.length));

    Swal.fire({
      icon: 'success',
      title: 'Cart Updated...',
      text: 'Your cart has been updated!',
    })
  }

  calcCartTotal(){
    this.cartTotal = 0;
    this.cartData.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    
    })
  }


}
