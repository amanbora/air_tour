import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/NewUser';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUserUrl = 'http://localhost:3201/createUser';
  signInUserUrl = 'http://localhost:3201/signInUser';

  constructor(public http: HttpClient) { }


  login(user: User) {
    return this.http.post<any>(this.signInUserUrl, user);
  }

}
