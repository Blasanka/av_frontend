import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { MessangerInquiryService } from '../service/messangerInquiry.service';
import { Product } from '../models/product';
import {NotificationsService} from 'angular2-notifications';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-direct-inquiry',
  templateUrl: './direct-inquiry.component.html',
  styleUrls: ['./direct-inquiry.component.css']
})
export class DirectInquiryComponent implements OnInit {

  id: any;
  oneProduct: any = {};
  productList: Product[] = [];
  productItem: any;
  quantity: any ;
  q: any;
  constructor(private productService: ProductService, private route: ActivatedRoute,
              private msgi: MessangerInquiryService, private service: NotificationsService) { }

  ngOnInit() {
    // this.productList = this.productService.getProducts()

    // let id = this.route.snapshot.params['id']
    // // this.oneProduct = this.productService.getProduct(id)
    // // console.log(Number(id));
    // this.q = this.productService.getProducts();
    // this.oneProduct = this.q.find(item => item.id === Number(id));

    this.route.params.subscribe(params => {
      this.id = params.id;
      });
    this.productService.getProduct(this.id).subscribe((res: any) => {
      this.oneProduct = res.data;
    });
  }

  handleAddToCart(image, name) {
    this.msgi.sendMsgInquiry(this.oneProduct);
    Swal.fire({
      title: 'One Item Added',
      icon: 'success',
      imageUrl: image,
      imageWidth: 200,
      imageHeight: 200,
      text: name,
      footer: '<a href="/inquirycart">View Inquiry</a>'
    });
    }
}
