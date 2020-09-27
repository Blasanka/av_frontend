import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { MessangerInquiryService } from '../service/messangerInquiry.service';
import { Product } from '../models/product';
import {NotificationsService} from 'angular2-notifications';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-direct-inquiry',
  templateUrl: './direct-inquiry.component.html',
  styleUrls: ['./direct-inquiry.component.css']
})
export class DirectInquiryComponent implements OnInit {

  id: any;
  oneProduct: any = {};
  quantity: any ;
  q: any;
  isLoading: boolean;
  resourcesBaseUrl: string;
  
  constructor(private productService: ProductService, private route: ActivatedRoute,
              private msgi: MessangerInquiryService, private service: NotificationsService) { }

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.id = params.id;
      });
    this.productService.getProduct(this.id).subscribe((res: any) => {
      this.oneProduct = res.data;
      this.isLoading = false;
    });
  }

  handleAddToCart(image, name) {
    this.msgi.sendMsgInquiry(this.oneProduct);
    Swal.fire({
      title: 'One Item Added',
      icon: 'success',
      imageUrl: this.resourcesBaseUrl + image[0],
      imageWidth: 200,
      imageHeight: 200,
      text: name,
      footer: '<a href="/inquirycart">View Inquiry</a>'
    });
    }
}
