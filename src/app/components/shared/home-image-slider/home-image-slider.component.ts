import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageSliderDataService } from 'src/app/service/image-slider.service';
import { Result } from './result';

@Component({
  selector: 'app-home-image-slider',
  templateUrl: './home-image-slider.component.html',
  styleUrls: ['./home-image-slider.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeImageSliderComponent implements OnInit {
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;

  constructor(private data: ImageSliderDataService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
   }

  ngOnInit() {
    this.data.getData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
   this.selectedIndex = this.selectedIndex + 1;
   if (this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }
}
