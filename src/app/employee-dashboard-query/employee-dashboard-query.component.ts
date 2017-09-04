import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee-dashboard/employee.service";
import {Employee} from "../employee-dashboard/employee";

@Component({
  selector: 'app-employee-dashboard-query',
  templateUrl: './employee-dashboard-query.component.html',
  styleUrls: ['./employee-dashboard-query.component.scss']
})
export class EmployeeDashboardQueryComponent implements OnInit {
  employees: Employee[];
  selectedEmployeeId: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

}
