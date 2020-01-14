import { Component, OnInit } from '@angular/core';
import { ServiceOptionPrototype } from 'src/app/models/ServiceOptionDesc';

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.css']
})
export class ChildServiceComponent implements OnInit {

  childs = ['Child Travelling Alone', 'Child On-Board'];

  alone = new ServiceOptionPrototype();
  onboard = new ServiceOptionPrototype();
  
  options: ServiceOptionPrototype [];

  constructor() { }

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

}
