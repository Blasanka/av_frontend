import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { MessangerService } from '../service/messanger.service';
import { MessangerWishlistService } from '../service/messengerWishlist.service';
import Swal from 'sweetalert2';
import { MessangerInquiryService } from '../service/messangerInquiry.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  isButtonVisible1 = true;
  isButtonVisible2 = false;
  featuredProductCat1: any;
  @Input() productItem: Product;
  resourcesBaseUrl: string;

  constructor(private msg: MessangerService, private msgw: MessangerWishlistService,
              private msgi: MessangerInquiryService) {
  }

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.displayButton();
  }

  handleAddToCart(name, image) {
    this.msg.sendMsg(this.productItem);
    Swal.fire({
      title: 'One Item Added To Cart',
      icon: 'success',
      imageUrl: image,
      imageWidth: 200,
      imageHeight: 200,
      text: name,
      footer: '<a href="/cart">View Cart</a>'
    });
  }

  handleAddToWishlist() {
    this.msgw.sendMsgWishlist(this.productItem);
  }
  handleAddToInquiry() {
    this.msgi.sendMsgInquiry(this.productItem);
  }

  displayButton() {
    if (this.productItem.supplier === 'AV') {
       this.isButtonVisible1 = true;
       this.isButtonVisible2 = false;
    }
    if (this.productItem.supplier !== 'AV') {
      this.isButtonVisible1 = false;
      this.isButtonVisible2 = true;
    }
  }
}
