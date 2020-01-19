import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcouponComponent } from './newcoupon.component';

describe('NewcouponComponent', () => {
  let component: NewcouponComponent;
  let fixture: ComponentFixture<NewcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
