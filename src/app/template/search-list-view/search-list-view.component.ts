import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-list-view',
  templateUrl: './search-list-view.component.html',
  styleUrls: ['./search-list-view.component.css']
})
export class SearchListViewComponent implements OnInit {

  resourcesBaseUrl: string;
  products = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    if (navigation.extras.state == null) {
      this.router.navigate(['/']);
    }
    this.products = state.data;
  }

  ngOnInit() {
    this.resourcesBaseUrl = environment.resourcesBaseUrl;
  }

}
