import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashboardQueryComponent } from './employee-dashboard-query.component';

describe('EmployeeDashboardQueryComponent', () => {
  let component: EmployeeDashboardQueryComponent;
  let fixture: ComponentFixture<EmployeeDashboardQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDashboardQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDashboardQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
