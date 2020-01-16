import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcouponComponent } from './foodcoupon.component';

describe('FoodcouponComponent', () => {
  let component: FoodcouponComponent;
  let fixture: ComponentFixture<FoodcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
