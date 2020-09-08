import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCartComponent } from './inquiry-cart.component';

describe('InquiryCartComponent', () => {
  let component: InquiryCartComponent;
  let fixture: ComponentFixture<InquiryCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
