import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOfficialComponent } from './main-official.component';

describe('MainOfficialComponent', () => {
  let component: MainOfficialComponent;
  let fixture: ComponentFixture<MainOfficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOfficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
