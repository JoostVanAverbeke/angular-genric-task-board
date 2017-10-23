import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {EmployeeMultibarChartComponent} from "../employee-multibar-chart/employee-multibar-chart.component";
import {EmployeeQuery} from "../employee-dashboard-query/employee-query";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  @ViewChild(EmployeeMultibarChartComponent) employeeMultiBarChartComponent: EmployeeMultibarChartComponent
  employeeQuery: EmployeeQuery;
  constructor() { }

  ngOnInit() {
  }

  employeeQueryHandler(event: EmployeeQuery) {
    this.employeeQuery = event;
    this.employeeMultiBarChartComponent.setEmployeeQuery(this.employeeQuery.employee, this.employeeQuery.startDate, this.employeeQuery.endDate);
  }
}
