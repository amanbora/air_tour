import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  url = 'https://0.0.0.0:8000';

  constructor(private http: HttpClient) {}

  hello() {
    return this.http.get<any>(this.url);
  }

  recommend() {
    return this.http.post<any>(this.url + '/recommend', {});
  }
}
