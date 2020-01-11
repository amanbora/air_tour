import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJourneyComponent } from './add-new-journey.component';

describe('AddNewJourneyComponent', () => {
  let component: AddNewJourneyComponent;
  let fixture: ComponentFixture<AddNewJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
