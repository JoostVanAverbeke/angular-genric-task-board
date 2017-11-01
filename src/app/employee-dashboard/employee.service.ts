import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {Employee} from "./employee";

@Injectable()
export class EmployeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  employeesUrl = 'http://localhost:3000/employees';
  /*
   Constructs a EmployeeService
   */
  constructor(private http: Http) {
  }
  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.employeesUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError);
  }

  getEmployee(employeeId: number): Promise<Employee> {
    const url = `${this.employeesUrl}/${employeeId}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Employee)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
