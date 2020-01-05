import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3201/createUser';

  constructor(public http: HttpClient) { }

  signup(user: User) {
      return this.http.post<any>(this.url, user);
  }
}
