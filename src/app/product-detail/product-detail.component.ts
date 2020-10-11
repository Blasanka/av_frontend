import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { MessangerService } from '../service/messanger.service';
import {NotificationsService} from 'angular2-notifications';
import Swal from 'sweetalert2';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  oneProduct: any = {};
  quantity: any ;
  q: any;
  id: any;
  isLoading: boolean;
  resourcesBaseUrl: string;

  relatedProducts = [];
  isRelatedProductLoading = true;
  youMayLikeProducts = [];
  isMayLikeProductLoading = true;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private msg: MessangerService, private service: NotificationsService) { }

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.id = params.id;
      });
    this.productService.getProduct(this.id).subscribe((res: any) => {
      this.oneProduct = res.data;
      this.isLoading = false;
      this.productService.getRelatedProducts(this.oneProduct.sub_category_id, this.oneProduct.id)
        .subscribe((rel: any) => {
          this.relatedProducts = rel.data;
          this.isRelatedProductLoading = false;
          this.productService.getMayLikeProducts(this.oneProduct.category_id, this.oneProduct.id)
            .subscribe((may: any) => {
              this.youMayLikeProducts = may.data;
              this.isMayLikeProductLoading = false;
            });
      });
    });
  }

  handleAddToCart(image, name) {
    const currentQty = localStorage.getItem('quantity');
    if (currentQty != null) {
      const newQty = Number.parseInt(currentQty, 10) + 1;
      localStorage.setItem('quantity', JSON.stringify(newQty));
    } else {
      localStorage.setItem('quantity', JSON.stringify(1));
    }
    this.msg.sendMsg(this.oneProduct);
    Swal.fire({
      title: 'One Item Added',
      icon: 'success',
      imageUrl: `http://127.0.0.1:8000/storage/${image}`,
      imageWidth: 200,
      imageHeight: 200,
      text: name,
      footer: '<a href="/cart">View Cart</a>'
    });
  }
}
