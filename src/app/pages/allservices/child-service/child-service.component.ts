import { Component, OnInit, Inject } from '@angular/core';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';
import { AddserviceService } from 'src/app/services/addservice.service';
import { ServiceProt } from './../../../models/Service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.css']
})
export class ChildServiceComponent implements OnInit {

  
  // date: Date;

  constructor(private addservice: AddserviceService, private router: Router) { }

  childs = ['Child Travelling Alone', 'Child On-Board'];

  alone = new ServiceOptionPrototype();
  onboard = new ServiceOptionPrototype();
  options: ServiceOptionPrototype [];

  user: any;
  service= new ServiceProt();
  newService: any;
  to: string;
  from: string;

  ngOnInit() {
      this.alone.name = this.childs[0];
      // tslint:disable-next-line: max-line-length
      this.alone.desc = 'Generally children upto age 12 years traveling alone are classified as "Unaccompanied Minors” for                       which we provide a dedicated service';
      this.alone.imgUrl = './../../../../assets/images/img-service/alone.jpg';

      this.onboard.name = this.childs[1];
      // tslint:disable-next-line: max-line-length
      this.onboard.desc = 'Travelling with a mini traveller gives you more special memories to cherish. We ensure your trip with babies and young children is made more comfortable and convenient with our exclusive services.';
      this.onboard.imgUrl = './../../../../assets/images/img-service/onboard.jpg';

      this.options = [this.alone, this.onboard];
  }

  func(name: any)
  {   
    console.log(name);
    this.user =  localStorage.getItem('userId');


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
    }, error => {console.log(error)

    }
    );
  }

}
