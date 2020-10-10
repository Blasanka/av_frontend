import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-main-category',
  templateUrl: './search-main-category.component.html',
  styleUrls: ['./search-main-category.component.css']
})
export class SearchMainCategoryComponent implements OnInit {
  categories: Category[] = [];
  isLoading: boolean;
  selectedCategory: Category;
  selected = 1;
  searchFormSubmitted = false;
  searchForm: FormGroup;
  isCategoryLoading = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private categoryService: CategoryService,
              private productService: ProductService,
              private formBuilder: FormBuilder) {}

  get lf() {
    return this.searchForm.controls;
  }

  ngOnInit() {
    this.isLoading = true;
    this.getCategories();

    this.searchForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      category_id: new FormControl('0'),
    });
  }

  getCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe((categories: any) => {
        this.categories = categories.data;
        this.isLoading = false;
      });
  }

  selectOption(id: any) {
    // this.selectedCategory = cat;
    this.searchForm.value.category_id = id;
    console.log(id);
  }

  searchProduct() {
    if (this.router.url.indexOf('/search/result') > -1) {
      this.router.navigate(['/search/result']);
    }
    this.searchFormSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.isCategoryLoading = true;
    this.productService.search(JSON.stringify(this.searchForm.value))
      .subscribe(
        (data: any) => {
          if (data.code === 200) {
            this.isCategoryLoading = false;
            this.router.navigate(['/search/result', this.searchForm.value.name], {state: data});
          } else if (data.code === 500) {
            this.isCategoryLoading = false;
            Swal.fire(
              'Searched failed!',
              'Please, Try again.',
              'error'
            );
          } else {
            this.isCategoryLoading = false;
            Swal.fire(
              'Searched failed!',
              'Please, Try again.',
              'error'
            );
          }
      },
      (err: any) => {
        console.log('error: ' + err);
        this.isCategoryLoading = false;
        Swal.fire(
          'Searched failed!',
          'Please, Try again.',
          'error'
        );
      }
  );
  }
}
