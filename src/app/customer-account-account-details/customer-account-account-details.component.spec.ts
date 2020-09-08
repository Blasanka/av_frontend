import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountAccountDetailsComponent } from './customer-account-account-details.component';

describe('CustomerAccountAccountDetailsComponent', () => {
  let component: CustomerAccountAccountDetailsComponent;
  let fixture: ComponentFixture<CustomerAccountAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
