import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const url = 'https://quiet-anchorage-64839.herokuapp.com/working/subscription';
@Injectable({
  providedIn: 'root'
})
export class PushService {


  constructor(private http: HttpClient) { }

  public sendSubscription(subscription : PushSubscription){
    return this.http.post(url, subscription);
  }
}
