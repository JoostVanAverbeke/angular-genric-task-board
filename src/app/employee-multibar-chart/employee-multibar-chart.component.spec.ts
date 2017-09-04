import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMultibarChartComponent } from './employee-multibar-chart.component';

describe('EmployeeMultibarChartComponent', () => {
  let component: EmployeeMultibarChartComponent;
  let fixture: ComponentFixture<EmployeeMultibarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMultibarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMultibarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
