import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabcouponComponent } from './cabcoupon.component';

describe('CabcouponComponent', () => {
  let component: CabcouponComponent;
  let fixture: ComponentFixture<CabcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
