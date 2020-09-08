import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCartViewComponent } from './inquiry-cart-view.component';

describe('InquiryCartViewComponent', () => {
  let component: InquiryCartViewComponent;
  let fixture: ComponentFixture<InquiryCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
