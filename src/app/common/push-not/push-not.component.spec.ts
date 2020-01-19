import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotComponent } from './push-not.component';

describe('PushNotComponent', () => {
  let component: PushNotComponent;
  let fixture: ComponentFixture<PushNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
