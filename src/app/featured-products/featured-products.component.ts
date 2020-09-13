import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  products: Product[] = [];
  isLoading: boolean;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products: any) => {
        this.products = products.data;
        this.isLoading = false;
      });
  }
}
