import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts: Product[] = [];
  isLoading: boolean;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getFeaturedProducts()
      .subscribe((featuredProducts: any) => {
        this.featuredProducts = featuredProducts.data;
        this.isLoading = false;
      });
  }
}
