import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobTimesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  employeesUrl = 'http://localhost:3000/employees';
  /*
    Constructs a JobTimesService
   */
  constructor(private http: Http) {
  }
  getJobTimesOfEmployee(employeeId: number): Promise<Array<any>> {
    const url = `${this.employeesUrl}/${employeeId}/job_times/streams`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
