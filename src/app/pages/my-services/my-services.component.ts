import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/addservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  constructor(private addservice: AddserviceService, private http: HttpClient) { }
  // my = [ { "from": "from", "name": "Lost Baggage","time": "time","to": "to","uid": "1234"}   ];
  url = 'http://localhost:3201/working/serviceOver';

  myservices: string[] =[''];

  serviceCancel ={
    'service':{}
  }
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

  cancel(service){
      console.log(service);
      this.serviceCancel.service = service;
      console.log(this.serviceCancel);
        this.http.post<any>(this.url,service).subscribe(
          data=>{
            console.log(data);
            window.location.reload();
          }, 
          error=>console.log(error)
        );
  } 

}
