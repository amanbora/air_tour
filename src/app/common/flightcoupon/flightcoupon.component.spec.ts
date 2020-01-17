import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightcouponComponent } from './flightcoupon.component';

describe('FlightcouponComponent', () => {
  let component: FlightcouponComponent;
  let fixture: ComponentFixture<FlightcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
