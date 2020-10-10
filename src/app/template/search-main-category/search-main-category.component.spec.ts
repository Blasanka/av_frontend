import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainCategoryComponent } from './search-main-category.component';

describe('SearchMainCategoryComponent', () => {
  let component: SearchMainCategoryComponent;
  let fixture: ComponentFixture<SearchMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
