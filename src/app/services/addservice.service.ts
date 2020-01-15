import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import {Service} from '../models/Service'
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {



  url = "http://localhost:3201/user";

  user:any;


  constructor(public http: HttpClient) { }

  add(data: any)
  {
    console.log(data);
    return this.http.post<any>(this.url + '/addService', data);
  }

  getMyServices(){
    this.user = firebase.auth().currentUser.uid;
    console.log(this.user);
    return this.http.get<any>(this.url + '/myService', this.user);
  }

  }
