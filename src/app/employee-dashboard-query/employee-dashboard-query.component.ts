import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../employee-dashboard/employee.service";
import {Employee} from "../employee-dashboard/employee";
import {EmployeeQuery} from "./employee-query";

@Component({
  selector: 'app-employee-dashboard-query',
  templateUrl: './employee-dashboard-query.component.html',
  styleUrls: ['./employee-dashboard-query.component.scss']
})
export class EmployeeDashboardQueryComponent implements OnInit {
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

  processEmployeeQuery(): void {
    this.employeeQuery.employee = this.getEmployeeById(this.employeeQuery.selectedEmployeeId);
    if (this.validEmployeeQuery()) {
      console.log('Emit query for employee ' + this.employeeQuery.employee.name + ' from ' +
      this.employeeQuery.startDate + ' until ' + this.employeeQuery.endDate);
      this.specifiedEmployeeQuery.emit(this.employeeQuery);
    }
   }

  private getEmployeeById(id: number): Employee {
    return this.employees.find(employee => employee.id == id);
  }

  private validEmployeeQuery(): boolean {
    let returnValue: boolean = false;
    if (this.employeeQuery.employee != null &&
      this.employeeQuery.startDate <= this.employeeQuery.endDate) {
      returnValue = true;
    }
    return returnValue;
  }

}
