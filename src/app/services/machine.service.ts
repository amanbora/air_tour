import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) {}

  hello() {
    return this.perform('get', '/');
  }

  recommend() {
    return this.perform( 'post', '/recommend');
  }

  async perform(method, resource, data= {}) {
     const url = `https://09d56334.ngrok.io${resource}`;

     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     switch (method) {
       case 'get': return this.http.get(url,  httpOptions).toPromise();
       case 'post': return this.http.post(url, httpOptions).toPromise();
     }
    }
}
