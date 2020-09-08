import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountPaymentOptionsComponent } from './customer-account-payment-options.component';

describe('CustomerAccountPaymentOptionsComponent', () => {
  let component: CustomerAccountPaymentOptionsComponent;
  let fixture: ComponentFixture<CustomerAccountPaymentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountPaymentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountPaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
