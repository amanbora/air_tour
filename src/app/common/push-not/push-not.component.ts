import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from 'src/app/services/push.service';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-push-not',
  templateUrl: './push-not.component.html',
  styleUrls: ['./push-not.component.css']
})
export class PushNotComponent implements OnInit {

  constructor(swPush: SwPush, private pushService : PushService, private http: HttpClient) { 

    if(swPush.isEnabled){
      swPush.requestSubscription({
        serverPublicKey : 'BHh7Cf0pTWJlwcjOsBKKKEssBha9C_GE9Upt807SwadnMt8diCqqvjE91YVk-lk_kBCO3UliXkz3dgQPgmN5vxQ',
      })
      .then(subscription => {
        this.pushService.sendSubscription(subscription).subscribe(),
        console.log(subscription);
      })
      .catch( console.error)
    }
  }

  ngOnInit() {
    
  }

}
