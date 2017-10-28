import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashboardFormQueryComponent } from './employee-dashboard-form-query.component';

describe('EmployeeDashboardFormQueryComponent', () => {
  let component: EmployeeDashboardFormQueryComponent;
  let fixture: ComponentFixture<EmployeeDashboardFormQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDashboardFormQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDashboardFormQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
