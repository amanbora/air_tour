import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-cabcoupon',
  templateUrl: './cabcoupon.component.html',
  styleUrls: ['./cabcoupon.component.css']
})
export class CabcouponComponent implements OnInit {

  public data; 
  public service;
  
  constructor( private myservice: CouponService) { }
 
  ngOnInit() {
    this.service=this.myservice;
    this.data=this.service.getcabdata();
    
  }

}
