import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-center',
  templateUrl: './our-center.component.html',
  styleUrls: ['./our-center.component.css']
})
export class OurCenterComponent implements OnInit {

  constructor() { }

   centers = [
     {
    name: "patna",
    contact :" contact us :911223"
  },
  {
    name: "Delhi",
    contact :" contact us : 911119"
  },
  {
    name: "Ranchi",
    contact :" contact us :91345"
  },

]

  ngOnInit() {
  }

}
