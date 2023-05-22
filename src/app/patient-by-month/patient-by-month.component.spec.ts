import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientByMonthComponent } from './patient-by-month.component';

describe('PatientByMonthComponent', () => {
  let component: PatientByMonthComponent;
  let fixture: ComponentFixture<PatientByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
