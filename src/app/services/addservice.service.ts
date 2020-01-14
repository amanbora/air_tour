import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

   user = firebase.auth().currentUser;


  newUserUrl = 'http://localhost:3201/createUser';
  addPorterUrl = 'http://localhost:3201/addPorter';



  constructor(public http: HttpClient) { }


  addPorter() {
    return this.http.post<any>(this.addPorterUrl,this.user);
  }
}
