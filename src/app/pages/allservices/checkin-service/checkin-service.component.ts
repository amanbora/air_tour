import { Component, OnInit } from '@angular/core';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';
import { AddserviceService } from 'src/app/services/addservice.service';
import { ServiceProt } from 'src/app/models/Service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkin-service',
  templateUrl: './checkin-service.component.html',
  styleUrls: ['./checkin-service.component.css']
})
export class CheckinServiceComponent implements OnInit {
  
  check = ['Web Check-In'];
  pnr:any;

  web = new ServiceOptionPrototype();
  options: ServiceOptionPrototype [];
  aloneform = false;

  constructor(private addservice: AddserviceService, private router: Router, private http :HttpClient) { }

  ngOnInit() {
      this.web.name = this.check[0];
      // tslint:disable-next-line: max-line-length
      this.web.desc = 'Generally children upto age 12 years traveling web are classified as "Unaccompanied Minors” for                       which we provide a dedicated service';
      this.web.imgUrl = './../../../../assets/images/img-service/web.jpg';
      this.options = [this.web];
  }

  user: any;
  service= new ServiceProt();
  newService: any;
  to: string;
  from: string;
  
  url = 'http://localhost:3201/user/';
  status =0;
  openform()
  {
    this.aloneform =true;
  }
  config = {
    params: { pnr : '' }
  };
  func(name: any)
  {   
    this.config.params.pnr = this.pnr;
    console.log(this.config.params.pnr);
       this.http.get<any>(this.url + 'onlineCheckIn?pnr' + '=' + this.pnr, {observe: 'response'}).subscribe( result => {
       console.log(result);
      console.log(result, result.status);
      this.status = result.status;

      
    },
     error => {
      this.status = error.status; 
      console.log(error)
     }
  );
    

    this.service.name = name; // interpolate
    this.service.to = this.to; // interpolate
    this.service.from = this.from ; // interpolate
    this.service.time = Date.now() ; // interpolate
    this.service.user = this.user;
  
    this.newService = {};
    this.newService['uid'] = this.user;
    this.newService['services'] = [];
    this.newService['services'].push(this.service);

    

    this.addservice.add(this.newService)
    .subscribe(
      data => { console.log(data);
                this.router.navigate(['/my-services'])
      .then(() => {
        window.location.reload();
      });
    },error => {console.log(error)})
  
  


 

}
}


