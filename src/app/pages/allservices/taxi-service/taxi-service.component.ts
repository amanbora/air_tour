import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi-service',
  templateUrl: './taxi-service.component.html',
  styleUrls: ['./taxi-service.component.css']
})
export class TaxiServiceComponent implements OnInit {

  taxis = ['Ride Now', 'Ride Later'];
  constructor() { }

  ngOnInit() {
  }

}
