import { Injectable } from '@angular/core';
import {User} from "./authenticate/user";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

  constructor() { }

  isUserAuthenticated(): boolean {
    return (localStorage.getItem('currentUser') != null);
  }

  login(login: string, password: string): Observable<User> {
    //TODO(JVA) Retrieve
    let user: User = { id: 1, login: 'Miaxello', password: '1234', firstName: 'Mia', lastName: 'Miaxello'};

    localStorage.setItem('currentUser', JSON.stringify(user));
    return Observable.of(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
