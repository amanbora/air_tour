import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import {Service} from '../models/Service'
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {



   url = "http://localhost:3201/user/addService";

  userlocation:any;


  constructor(public http: HttpClient) { }

  add(data:any)
  { 
    console.log(data);
    return this.http.post<any>(this.url ,data);
  }
  
                                                                                                                                           

  }
