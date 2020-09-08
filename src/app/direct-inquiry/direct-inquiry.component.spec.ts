import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectInquiryComponent } from './direct-inquiry.component';

describe('DirectInquiryComponent', () => {
  let component: DirectInquiryComponent;
  let fixture: ComponentFixture<DirectInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
