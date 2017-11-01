import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeQuery} from "../employee-dashboard-query/employee-query";
import {EmployeeDonutChartComponent} from "../employee-donut-chart/employee-donut-chart.component";
import {EmployeeJobQuery} from "../employee-job-query/employee-job-query";

@Component({
  selector: 'app-employee-job-dashboard',
  templateUrl: './employee-job-dashboard.component.html',
  styleUrls: ['./employee-job-dashboard.component.scss']
})
export class EmployeeJobDashboardComponent implements OnInit {
  @ViewChild(EmployeeDonutChartComponent) employeeDonutChartComponent: EmployeeDonutChartComponent;
  employeeJobQuery: EmployeeJobQuery;

  constructor() { }

  ngOnInit() {
  }

  employeeJobQueryHandler(event: EmployeeJobQuery) {
    this.employeeJobQuery = event;
    this.employeeDonutChartComponent.setEmployeeQuery(this.employeeJobQuery.employeeId, this.employeeJobQuery.from,
      this.employeeJobQuery.to);
  }
}
