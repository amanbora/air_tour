import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCenterComponent } from './our-center.component';

describe('OurCenterComponent', () => {
  let component: OurCenterComponent;
  let fixture: ComponentFixture<OurCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
