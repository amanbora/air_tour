import { Component, OnInit } from '@angular/core';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';

@Component({
  selector: 'app-checkin-service',
  templateUrl: './checkin-service.component.html',
  styleUrls: ['./checkin-service.component.css']
})
export class CheckinServiceComponent implements OnInit {
  
  check = ['Web Check-In'];

  web = new ServiceOptionPrototype();
  options: ServiceOptionPrototype [];

  constructor() { }

  ngOnInit() {
      this.web.name = this.check[0];
      // tslint:disable-next-line: max-line-length
      this.web.desc = 'Generally children upto age 12 years traveling web are classified as "Unaccompanied Minors” for                       which we provide a dedicated service';
      this.web.imgUrl = './../../../../assets/images/img-service/web.jpg';
      this.options = [this.web];
  }

}
