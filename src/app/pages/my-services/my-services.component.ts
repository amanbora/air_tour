import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/addservice.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  constructor(private addservice: AddserviceService) { }
  // my = [ { "from": "from", "name": "Lost Baggage","time": "time","to": "to","uid": "1234"}   ];
  myservices: string[] =[''];
  status = 0;
  objectKeys = Object.keys;
  ngOnInit() {
      console.log(this.myservices);
      this.addservice.getMyServices().subscribe(
        result => {
          console.log(result, result.status);
          this.status = result.status;
          this.myservices = result.body as string[];
        },
         error => console.log(error)
      );
  }

}
