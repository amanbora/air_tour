import { Component, OnInit } from '@angular/core';
import { AddserviceService } from './../../../services/addservice.service';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';
import { ServiceProt } from 'src/app/models/Service';

@Component({
  selector: 'app-taxi-service',
  templateUrl: './taxi-service.component.html',
  styleUrls: ['./taxi-service.component.css']
})
export class TaxiServiceComponent implements OnInit {
  [x: string]: any;

  taxis = ['Ride Now', 'Ride Later'];

  now = new ServiceOptionPrototype();
  later = new ServiceOptionPrototype();

  options: ServiceOptionPrototype [];

  constructor( private addservice: AddserviceService) { }

  ngOnInit() {

      this.now.name = this.taxis[0];
      // tslint:disable-next-line: max-line-length
      this.now.desc = 'Our Taxi service offers a hassle-free, comfortable and affordable taxi cab service nearby your location to travel to any airport';
      this.now.imgUrl = './../../../../assets/images/img-service/taxi.jpeg';

      this.later.name = this.taxis[1];
      // tslint:disable-next-line: max-line-length
      this.later.desc = 'What is Ride Later with Taxi ? We understand that there are times when you want to book a Taxi  in advance to remain assured that you will get a cab when you most need it. With Ride Later option on your Airsy App, you can book a Taxi from your Taxi  app up to 7 days in advance to 30 mins ahead of the desired pickup time';
      this.later.imgUrl = './../../../../assets/images/img-service/taxi.jpeg';

      this.options = [this.now, this.later];
  }

  user: any;
  service= new ServiceProt();
  newService: any;
  
  func(name: any)
  {   
    console.log(name);
    this.user =  localStorage.getItem('userId');

    
    this.service['name'] = name;//interpolate
    this.service['to'] = 'to';//interpolate
    this.service['from'] = 'from';//interpolate
    this.service['time'] = 'time';//interpolate
   
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
