import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
@Component({
  selector: 'app-flightcoupon',
  templateUrl: './flightcoupon.component.html',
  styleUrls: ['./flightcoupon.component.css']
})
export class FlightcouponComponent implements OnInit {

  
  public data; 
  public service;
  
  constructor( private myservice: CouponService) { }
 
  ngOnInit() {
    this.service=this.myservice;
    this.data=this.service.getflightdata();
    
  }

}