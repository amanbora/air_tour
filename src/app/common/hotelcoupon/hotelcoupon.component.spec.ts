import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcouponComponent } from './hotelcoupon.component';

describe('HotelcouponComponent', () => {
  let component: HotelcouponComponent;
  let fixture: ComponentFixture<HotelcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
