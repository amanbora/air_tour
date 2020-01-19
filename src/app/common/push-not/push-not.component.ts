import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from 'src/app/services/push.service';

@Component({
  selector: 'app-push-not',
  templateUrl: './push-not.component.html',
  styleUrls: ['./push-not.component.css']
})
export class PushNotComponent implements OnInit {

  constructor(swPush: SwPush, private pushService : PushService) { 

    if(swPush.isEnabled){
      swPush.requestSubscription({
        serverPublicKey : 'BBqNegnX4obXx1AbF4S5QVbACTD4x4f5QHdC26se_UfwcFdl6wG_pN6DmScS3DeTIBAAbvCWO18o-5kW_XDjVqc',
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
