import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor() { }

  services :string[] =[ "CAB BOOKING","HOTEL","CHILD CARE"];

  ngOnInit() {
  }

}
