import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobDashboardComponent } from './employee-job-dashboard.component';

describe('EmployeeJobDashboardComponent', () => {
  let component: EmployeeJobDashboardComponent;
  let fixture: ComponentFixture<EmployeeJobDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeJobDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeJobDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
