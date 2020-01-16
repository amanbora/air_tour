import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-hotelcoupon',
  templateUrl: './hotelcoupon.component.html',
  styleUrls: ['./hotelcoupon.component.css']
})
export class HotelcouponComponent implements OnInit {

  public data; 
  public service;
  
  constructor( private myservice: CouponService) { }
 
  ngOnInit() {
    this.service=this.myservice;
    this.data=this.service.gethoteldata();
    
  }



}
