import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountReviewsComponent } from './customer-account-reviews.component';

describe('CustomerAccountReviewsComponent', () => {
  let component: CustomerAccountReviewsComponent;
  let fixture: ComponentFixture<CustomerAccountReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
