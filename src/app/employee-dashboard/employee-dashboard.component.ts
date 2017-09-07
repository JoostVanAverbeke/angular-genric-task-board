import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeMultibarChartComponent} from "../employee-multibar-chart/employee-multibar-chart.component";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  @ViewChild(EmployeeMultibarChartComponent) employeeMultiBarChartComponent: EmployeeMultibarChartComponent
  employee: Employee;
  constructor() { }

  ngOnInit() {
  }

  employeeHandler(event: Employee) {
    this.employee = event;
    this.employeeMultiBarChartComponent.setEmployeeId(this.employee.id);
  }
}
