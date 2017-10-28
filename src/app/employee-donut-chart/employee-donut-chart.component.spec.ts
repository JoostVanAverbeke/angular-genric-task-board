import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDonutChartComponent } from './employee-donut-chart.component';

describe('EmployeeDonutChartComponent', () => {
  let component: EmployeeDonutChartComponent;
  let fixture: ComponentFixture<EmployeeDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
