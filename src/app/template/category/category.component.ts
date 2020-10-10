import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  subCategories: Category[] = [];
  filteredSubCategories: Category[] = [];
  categories: Category[] = [];
  isLoading: boolean;

  constructor(private categoryService: CategoryService) {}

  visibleMainMenu() {

    const menuclass = document.getElementsByClassName('categories_menu_toggle')[0];

    if (menuclass.classList.contains('hide_main_menu')) {
      menuclass.classList.add('visibe_main_menu');
      menuclass.classList.remove('hide_main_menu');
    } else {
      menuclass.classList.remove('visibe_main_menu');
      menuclass.classList.add('hide_main_menu');
      }

  }

  ngOnInit() {
    this.isLoading = true;
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe((categories: any) => {
        this.categories = categories.data;
        this.isLoading = false;
        this.getSubCategories();
      });
  }

  getSubCategories(): void {
    this.categoryService.getAllSubCategories()
      .subscribe((subCategories: any) => {
        this.subCategories = subCategories.data;
        this.isLoading = false;
      });
  }

  filterSubCategories(cat: Category) {
    const subs = [];
    this.subCategories.forEach((sub) => {
      if (cat.id === sub.category_id) {
        subs.push(sub);
      }
    });
    this.filteredSubCategories = subs;
  }
}
