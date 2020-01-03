import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:3200/signup';
  constructor(public http: HttpClient) { }

   signup(user: User) {
     return this.http.post<any>(this.url, user);
   }
}
