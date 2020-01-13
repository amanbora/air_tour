import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinServiceComponent } from './checkin-service.component';

describe('CheckinServiceComponent', () => {
  let component: CheckinServiceComponent;
  let fixture: ComponentFixture<CheckinServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
