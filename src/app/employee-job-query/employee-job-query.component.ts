import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateValidators} from "../validators/date.validators";
import {EmployeeService} from "../employee-dashboard/employee.service";
import {Employee} from "../employee-dashboard/employee";
import {EmployeeJobQuery} from "./employee-job-query";

@Component({
  selector: 'app-employee-job-query',
  templateUrl: './employee-job-query.component.html',
  styleUrls: ['./employee-job-query.component.scss']
})
export class EmployeeJobQueryComponent implements OnInit {
  @Output() employeeJobQueryEventEmitter: EventEmitter <EmployeeJobQuery> = new EventEmitter();

  employeeJobQuery: FormGroup;
  employees: Employee[];


  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.createForm();
  }

  ngOnInit() {
    let currentDate = new Date();
    let lastWeek = new Date();
    lastWeek.setDate(currentDate.getDate() - 7);

    this.employeeJobQuery.setValue({
      employeeId: null,
      from: lastWeek,
      to: currentDate
    });
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  onSubmit({ value, valid }: { value: EmployeeJobQuery, valid: boolean }) {
    console.log("executing submit ...");
    console.log(value, valid);
    console.log("employee id = " + value.employeeId);
    this.employeeJobQueryEventEmitter.emit(value);
  }

  private createForm(): void {


    this.employeeJobQuery = this.formBuilder.group({
      employeeId: [ '', Validators.required],
      from: [ '', Validators.required ],
      to: [ '', Validators.required ]
    }, {
      validator: Validators.compose([
        DateValidators.dateLessThan('from', 'to', { 'validDateRange': true})
      ])
    });
  }

}
