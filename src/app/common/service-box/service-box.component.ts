import { Component, OnInit } from '@angular/core';
import { Service } from './../../models/serviceDescription';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent implements OnInit {

  constructor() { }

         servicetaxi = new Service();
         servicechild = new Service();
         servicecheckIn = new Service();
         serviceluggage = new Service();

         serviceList: Service[] = []  ;

  ngOnInit() {
        this.servicetaxi.name = 'Taxi-Service';
        this.servicetaxi.desc = ' Book Your Taxi hassle free ';
        this.servicetaxi.imageUrl = './../../assets/images/img-service/taxi.jpeg';
        this.servicetaxi.options.push('Mini', 'Micro', 'Helicopter'); 

        this.servicechild.name = 'Child-Service';
        this.servicechild.desc = ' Book Your child hassle free ';
        this.servicechild.imageUrl = './../../assets/images/img-service/child-care.jpeg';
        this.servicechild.options.push('Children Travelling Alone', 'Child On-Board', 'Child Special Needs');

        this.servicecheckIn.name = 'CheckIn-Service';
        this.servicecheckIn.desc = ' Book Your checkin hassle free ';
        this.servicecheckIn.imageUrl = './../../assets/images/img-service/checkin.jpeg';
        this.servicecheckIn.options.push('Avoid Lines with Online Check-In');

        this.serviceluggage.name = 'Luggage-Service';
        this.serviceluggage.desc = ' Book Your luggagge hassle free ';
        this.serviceluggage.imageUrl = './../../assets/images/img-service/luggage.jpeg';
        this.serviceluggage.options.push('Add Extra Luggage', 'Porter Service', 'Fragile');

        this.serviceList.push(this.servicetaxi, this.servicechild, this.servicecheckIn, this.serviceluggage);
        console.log(this.serviceList);
  }

}
