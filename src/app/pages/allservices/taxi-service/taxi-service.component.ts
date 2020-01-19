import { Component, OnInit } from '@angular/core';
import { AddserviceService } from './../../../services/addservice.service';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';
import { ServiceProt } from 'src/app/models/Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taxi-service',
  templateUrl: './taxi-service.component.html',
  styleUrls: ['./taxi-service.component.css']
})
export class TaxiServiceComponent implements OnInit {
  [x: string]: any;



  constructor( private addservice: AddserviceService, private router: Router) { }

  taxis = ['Ride-Now', 'Ride-Later'];

  select = {'taxis[0]': false, 'taxis[1]': false};

  now = new ServiceOptionPrototype();
  later = new ServiceOptionPrototype();

  options: ServiceOptionPrototype [];
  airport = '';
  terminal = '';
  user: any;
  service = new ServiceProt();
  newService: any;

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

      this.select['Ride-Now'] = false;
      this.select['Ride-Later'] = false;

  }

  add(name: any) {
    this.select[name] = true;
  }

  func(name: any) {
    console.log(name);
    this.user =  localStorage.getItem('userId');



    this.service.name = 'name'; // interpolate
    this.service.to = 'Aiport -' + this.airport + ' Terminal -' + this.terminal; // interpolate
    this.service.from = localStorage.getItem('data'); // interpolate
    this.service.time = Date.now(); // interpolate

    this.newService = {};
    this.newService.uid = this.user;
    this.newService.services = [];
    this.newService.services.push(this.service);

    console.log(this.service.to);
    this.addservice.add(this.newService)
    .subscribe(
      data => {
        console.log(data);
        window.alert('Taxi Service Added!');
        this.router.navigate(['/my-services'])
        .then(() => {
          window.location.reload();
        });
      },

      error => { console.log(error); });
  }

}
