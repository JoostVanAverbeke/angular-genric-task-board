import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeQuery} from "../employee-dashboard-query/employee-query";
import {EmployeeDonutChartComponent} from "../employee-donut-chart/employee-donut-chart.component";

@Component({
  selector: 'app-employee-job-dashboard',
  templateUrl: './employee-job-dashboard.component.html',
  styleUrls: ['./employee-job-dashboard.component.scss']
})
export class EmployeeJobDashboardComponent implements OnInit {
  @ViewChild(EmployeeDonutChartComponent) employeeDonutChartComponent: EmployeeDonutChartComponent;
  employeeQuery: EmployeeQuery;

  constructor() { }

  ngOnInit() {
  }

  employeeQueryHandler(event: EmployeeQuery) {
    this.employeeQuery = event;
    this.employeeDonutChartComponent.setEmployeeQuery(this.employeeQuery.employee, this.employeeQuery.startDate, this.employeeQuery.endDate);
  }
}
