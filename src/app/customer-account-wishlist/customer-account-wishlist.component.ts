import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { isNull } from 'util';

@Component({
  selector: 'app-customer-account-wishlist',
  templateUrl: './customer-account-wishlist.component.html',
  styleUrls: ['./customer-account-wishlist.component.css']
})
export class CustomerAccountWishlistComponent implements OnInit {
  cartData: any;
  id: any;
  interval: any;
  totalValue: any;
  cartTotal: any;
  flatRate: any = 0;
  shoppingCart = [];
  constructor() { }

  ngOnInit(): void {

    if (!isNull(JSON.parse(localStorage.getItem('Items')))) {
      this.shoppingCart = [] = JSON.parse(localStorage.getItem('Items'));
    }
    // this.cartData = JSON.parse(localStorage.getItem('Items'));
    this.cartData = this.getData();
    this.calcCartTotal();
    let cartEmty = 0;
    if ((this.cartData === 0) && (cartEmty === 0)) {

      Swal.fire({
        title: 'Your Cart Is Empty',
        imageUrl: './../../assets/img/emptycart.png',
        imageWidth: 400,
        imageHeight: 300,
        text: name,
        footer: '<a href="">Lets Shopping</a>'
      });
      cartEmty++;
    }


  }

getData() {
return JSON.parse(localStorage.getItem('WishlistItems'));

}

calculateProductTotal() {
  const productTotal = (JSON.parse(localStorage.getItem('WishlistItems')).quantity) *
    (JSON.parse(localStorage.getItem('WishlistItems')).itemPrice);
}

removeData(id, image, name) {

  Swal.fire({
    title: 'Are you sure want to remove ' + name,
    imageUrl: image,
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
      for (let i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i].id === id) {
          this.cartData.splice(i, 1);
          console.log('Item removed!');
        }
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

    this.cartTotal = 0;
    this.cartData.forEach(item => {
      this.cartTotal += (item.quantity * item.price);

    });
    localStorage.setItem('WishlistItems', JSON.stringify(this.cartData));
    localStorage.setItem('WishlistTotal', JSON.stringify(this.cartTotal));
    localStorage.setItem('WishlistQuantity', JSON.stringify(this.cartData.length));

    Swal.fire({
      icon: 'success',
      title: 'Cart Updated...',
      text: 'Your cart has been updated!',
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartData.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });
  }

  addTocart(f) {
    let productExists = false;
    for (const i in this.shoppingCart) {
          if (this.shoppingCart[i].id === f.id) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You alredy added to cart!',
              footer: '<a href="/cart">View cart</a>'
            });
            productExists = true;
            return 0;
          }
        }
    if (!productExists) {
      Swal.fire({
        title: 'One Item Added To cart',
        icon: 'success',
        imageUrl: f.attachment,
        imageWidth: 200,
        imageHeight: 200,
        text: f.product_name,
        footer: '<a href="/cart">View cart</a>'
      });
      this.shoppingCart.push({
            id: f.id,
            product_name: f.product_name,
            quantity: 1,
            attachment: f.attachment,
            price: f.price
            });
}

    localStorage.setItem('Items', JSON.stringify(this.shoppingCart));
  }

}
