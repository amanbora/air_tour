import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageServiceComponent } from './luggage-service.component';

describe('LuggageServiceComponent', () => {
  let component: LuggageServiceComponent;
  let fixture: ComponentFixture<LuggageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuggageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
