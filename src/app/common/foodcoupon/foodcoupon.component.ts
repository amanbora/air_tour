import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
@Component({
  selector: 'app-foodcoupon',
  templateUrl: './foodcoupon.component.html',
  styleUrls: ['./foodcoupon.component.css']
})
export class FoodcouponComponent implements OnInit {

  public data; 
  public service;
  
  constructor( private myservice: CouponService) { }
 
  ngOnInit() {
    this.service=this.myservice;
    this.data=this.service.getfooddata();
    
  }

}