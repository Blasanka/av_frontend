import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountWishlistComponent } from './customer-account-wishlist.component';

describe('CustomerAccountWishlistComponent', () => {
  let component: CustomerAccountWishlistComponent;
  let fixture: ComponentFixture<CustomerAccountWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
