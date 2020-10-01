import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueryCheckoutComponent } from './inquery-checkout.component';

describe('InqueryCheckoutComponent', () => {
  let component: InqueryCheckoutComponent;
  let fixture: ComponentFixture<InqueryCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqueryCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueryCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
