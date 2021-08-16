import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { LoggedInUser } from '../models/loggedInUser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_SERVICE_BASE_URL = "/assets/templates/users.json";
  user: LoggedInUser = {} as LoggedInUser;
  public userSub = new BehaviorSubject<LoggedInUser>(this.user);

  constructor(private readonly http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user !== undefined && user.isLoggedIn === true) {
      this.userSub.next(user);
    }
  }

  validateUser(userInput: any): Observable<User> {
    return this.http.get<User[]>(this.USER_SERVICE_BASE_URL).pipe(map(value =>
       value.find(user => user.email === userInput.email && user.password === userInput.password)));
  }

  setUserSub(user: any) {
    this.userSub.next(user);
  }
}
