import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {EmployeeMultibarChartComponent} from "../employee-multibar-chart/employee-multibar-chart.component";
import {EmployeeJobQuery} from "../employee-job-query/employee-job-query";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  @ViewChild(EmployeeMultibarChartComponent) employeeMultiBarChartComponent: EmployeeMultibarChartComponent
  employeeJobQuery: EmployeeJobQuery;
  constructor() { }

  ngOnInit() {
  }

  employeeJobQueryHandler(event: EmployeeJobQuery) {
    this.employeeJobQuery = event;
    this.employeeMultiBarChartComponent.setEmployeeJobQuery(this.employeeJobQuery);
  }

}
