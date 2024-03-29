import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel3dComponent } from './carousel3d.component';

describe('Carousel3dComponent', () => {
  let component: Carousel3dComponent;
  let fixture: ComponentFixture<Carousel3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
