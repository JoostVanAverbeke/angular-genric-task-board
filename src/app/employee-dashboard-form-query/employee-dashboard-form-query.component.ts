import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../employee-dashboard/employee.service";
import {EmployeeQuery} from "../employee-dashboard-query/employee-query";
import {Employee} from "../employee-dashboard/employee";

@Component({
  selector: 'app-employee-dashboard-form-query',
  templateUrl: './employee-dashboard-form-query.component.html',
  styleUrls: ['./employee-dashboard-form-query.component.scss']
})
export class EmployeeDashboardFormQueryComponent implements OnInit {
  @Output() specifiedEmployeeQuery: EventEmitter <EmployeeQuery> = new EventEmitter();

  employees: Employee[];
  employeeQuery: EmployeeQuery;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    let currentDate = new Date();

    this.employeeQuery = new EmployeeQuery();
    this.employeeQuery.startDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
    this.employeeQuery.endDate = new Date();
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  onSubmit() {
    console.log("executing submit ...");
    this.employeeQuery.employee = this.getEmployeeById(this.employeeQuery.selectedEmployeeId);
    this.specifiedEmployeeQuery.emit(this.employeeQuery);
  }

  private getEmployeeById(id: number): Employee {
    return this.employees.find(employee => employee.id == id);
  }

}
