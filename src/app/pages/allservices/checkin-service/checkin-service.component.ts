import { Component, OnInit } from '@angular/core';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';
import { AddserviceService } from 'src/app/services/addservice.service';
import { ServiceProt } from 'src/app/models/Service';

@Component({
  selector: 'app-checkin-service',
  templateUrl: './checkin-service.component.html',
  styleUrls: ['./checkin-service.component.css']
})
export class CheckinServiceComponent implements OnInit {
  
  check = ['Web Check-In'];

  web = new ServiceOptionPrototype();
  options: ServiceOptionPrototype [];

  constructor(private addservice: AddserviceService) { }

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
  
  func(name: any)
  {   
    console.log(name);
    this.user =  localStorage.getItem('userId');

    this.service.servicename = name; // interpolate
    this.service.to = this.to; // interpolate
    this.service.from = this.from ; // interpolate
    this.service.date = new Date() ; // interpolate
    this.service.user = this.user;
  
    this.newService = {};
    this.newService['uid'] = this.user;
    this.newService['services'] = [];
    this.newService['services'].push(this.service);

    this.addservice.add(this.newService)
    .subscribe(
      data => { console.log(data);


    },error => {console.log(error)})
  }

}
