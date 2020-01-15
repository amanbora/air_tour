import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import * as firebase from 'firebase';
import {ServiceProt} from '../models/Service';
import { User } from '../models/User';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {



  url = 'http://localhost:3201/user';

  user: any;
  config = {
    params: { userid : '' }
  }


  constructor(public http: HttpClient, private fire: FirebaseService) {
    this.user = fire.currentUser();
   }

  add(data: any) {
    console.log(data);
    return this.http.post<any>(this.url + '/addService', data );
  }

  getMyServices() {

    this.config.params.userid = this.user;
    console.log(this.config);

    return this.http.get<any>(this.url + '/myService', this.config);
  }

  }
