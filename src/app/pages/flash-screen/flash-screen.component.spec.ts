import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashScreenComponent } from './flash-screen.component';

describe('FlashScreenComponent', () => {
  let component: FlashScreenComponent;
  let fixture: ComponentFixture<FlashScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
