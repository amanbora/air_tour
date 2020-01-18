import { Component, OnInit } from '@angular/core';
import { ServiceOptionPrototype } from './../../../models/ServiceOptionDesc';
import { AddserviceService } from 'src/app/services/addservice.service';
import {ServiceProt} from '../../../models/Service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';




@Component({
  selector: 'app-luggage-service',
  templateUrl: './luggage-service.component.html',
  styleUrls: ['./luggage-service.component.css']
})
export class LuggageServiceComponent implements OnInit {
  // options = {
  //     ServiceOptionPrototype
  // };

  constructor(private addservice: AddserviceService, private router: Router) {

   }

  luggages = ['Porter', 'Baggage Wrapping', 'Lost Baggage'];

  porter = new ServiceOptionPrototype();
  baggage = new ServiceOptionPrototype();
  lost = new ServiceOptionPrototype();

  options: ServiceOptionPrototype [];

  // public  user =  firebase.auth().currentUser;
  user: any;
  service = new ServiceProt();
  newService: any;
  to: string;
  from: string;
error
  ngOnInit() {
      this.porter.name = this.luggages[0];
      // tslint:disable-next-line: max-line-length
      this.porter.desc = 'Our attendants wearing orange fluorescent jackets will be deputed both outside and inside the terminal round-the- clock. We will help flyers not only in transporting their luggage, but also assist those with special needs from the terminal gate to the security check-point';
      this.porter.imgUrl = './../../../../assets/images/img-service/porter.jpg';

      this.baggage.name = this.luggages[1];
      // tslint:disable-next-line: max-line-length
      this.baggage.desc = 'Worried about someone stealing items from your checked luggage? Secure Wrap covers travelers bags in plastic as an extra layer of security. The baggage wrapping service wraps your important suitcases and other checked baggage with a special film that protects it from trouble including damage, being soiled, water leakage, being opened, and stolen contents';
      this.baggage.imgUrl = './../../../../assets/images/img-service/wrap.jpg';

      this.lost.name = this.luggages[2];
      // tslint:disable-next-line: max-line-length
      this.lost.desc = 'We provide an all-in-one lost luggage delivery service that caters to the needs of executives, baggage agents, and passengers. As a result, airlines experience a seamless, more efficient process';
      this.lost.imgUrl = './../../../../assets/images/img-service/lost.jpg';


      this.options = [this.porter, this.baggage, this.lost];
  }

  func(name: any) {
    console.log(name);
    this.user =  firebase.auth().currentUser.uid;


    this.service.name = name; // interpolate
    this.service.to = this.to; // interpolate
    this.service.from = this.from ; // interpolate
    this.service.time = Date.now() ; // interpolate
    this.service.user = this.user;

    this.newService = {};
    this.newService.uid = this.user;
    this.newService.services = [];
    this.newService.services.push(this.service);

    this.addservice.add(this.newService)
    .subscribe(
      data => { console.log(data);
                this.router.navigate(['/my-services'])
        .then(() => {
          window.location.reload();
        });

    }, error => {console.log(error); }
    );
  }




}
