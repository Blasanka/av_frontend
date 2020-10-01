import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  allProducts: Product[] = [];
  isLoading: boolean;
  resourcesBaseUrl: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
    this.isLoading = true;
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products: any) => {
        this.allProducts = products.data;
        this.isLoading = false;
      });
  }
}