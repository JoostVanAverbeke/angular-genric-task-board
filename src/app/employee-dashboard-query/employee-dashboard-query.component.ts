import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../employee-dashboard/employee.service";
import {Employee} from "../employee-dashboard/employee";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-employee-dashboard-query',
  templateUrl: './employee-dashboard-query.component.html',
  styleUrls: ['./employee-dashboard-query.component.scss']
})
export class EmployeeDashboardQueryComponent implements OnInit {
  @Output() selectEmployee: EventEmitter <Employee> = new EventEmitter();
  employees: Employee[];
  selectedEmployeeId: number;
  inputStartDate: Date;
  inputEndDate: Date;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    let currentDate = new Date();

    this.inputStartDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
    this.inputEndDate = new Date();

    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  setSelectedEmployee(): void {
    this.selectEmployee.emit(this.getEmployeeById(this.selectedEmployeeId));
  }

  private getEmployeeById(id: number): Employee {
    return this.employees.find(employee => employee.id == id);
  }

}
