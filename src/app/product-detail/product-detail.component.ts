import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { MessangerService } from '../service/messanger.service';
import { Product } from '../models/product'
import {NotificationsService} from 'angular2-notifications';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  oneProduct: any = {};
  productList: Product[] = [];
  productItem: any;
  quantity: any ;
  q:any;
  constructor(private productService: ProductService, private route: ActivatedRoute,private msg: MessangerService,private service: NotificationsService) { }

  ngOnInit() {
    // this.productList = this.productService.getProducts()
    
    // let id = this.route.snapshot.params['id']
    // // this.oneProduct = this.productService.getProduct(id)
    // // console.log(Number(id));
    // this.q = this.productService.getProducts();
    // this.oneProduct = this.q.find(item => item.id === Number(id));
    // console.log(this.oneProduct);
  }

  handleAddToCart(image,name){
    this.msg.sendMsg(this.oneProduct);
    Swal.fire({
      title: 'One Item Added',
      icon: 'success',
      imageUrl: image,
      imageWidth: 200,
      imageHeight: 200,
      text: name,
      footer: '<a href="/cart">View Cart</a>'
    })
    }
}
