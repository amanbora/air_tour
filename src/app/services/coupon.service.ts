import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor() { }


 public getcabdata(){
    let data = [
    {off: 'GREAT', title: ' Rs 40 Off on 3 Ola Rides (Select Users) ', couponcode: "FLAT40", condition: "<ol><li><span> Get Rs 40 off on 3 Ola Micro, Mini, Prime rides.</span></li><li><span> Valid only for select users and select rides.</span></li><li><span> Offer applicable only for users receiving the communication.</span></li></ol>"},
   {off: 'GREAT', title: ' Rs. 250 Off on Outstation Cab Bookings (New Users) ', couponcode: "HOLIDAYS", condition: "<ol><li><span> Get Rs. 250 off on Outstation Cab bookings.</span></li><li><span> Valid on first outstation booking (New users).</span></li><li><span> Valid for select users.</span></li></ol>"},
   {off: 'START', title: ' Ride the Ola Mini at Rs. 8/km ', couponcode: "GETDEAL", condition: "<ol><li><span> Book a ride on the Ola Mini at just Rs. 8/km till 20 km &amp; Rs.12/km after 20 km.</span></li><li><span> Valid in Delhi.</span></li><li><span> No coupon code is required to avail of this offer.</span></li></ol>"}, 
   {off: '150OFF', title: ' Rs. 150 Off on 2 Hours Above Packages (New Users) ', couponcode: "RENT150", condition:" <ol><li><span> Get Rs. 150 off on 2 Hours Above Packages.</span></li><li><span> Valid only on first transaction.</span></li><li><span> Offer valid in Chennai, Pune, Mumbai and more cities.</span></li></ol>"},
   {off: 'START', title: ' Ride the Ola Micro at Rs. 7/km  ', couponcode: "GETDEAL", condition: "<ol><li><span> Book a ride on the Ola Micro at just Rs.7/km till 30km &amp; Rs.14/km after 30 km.</span></li><li><span> Valid only in Mumbai.</span></li><li><span> No coupon code is required to avail of this offer.</span></li></ol>"},
   {off: 'START', title: ' Ride the Ola Prime Sedan at Rs. 13/km  ', couponcode: "GETDEAL", condition: "<ol><li><span> Book a ride on the Ola Prime Sedan at just Rs. 13/km till 8 km, Rs.14/km till 15 km &amp; 21/km after 15 km.</span></li><li><span> Valid in Bangalore.</span></li><li><span> No coupon code is required to avail of this offer.</span></li></ol>"}, 
   {off: 'START', title:' Ride the Ola Prime Sedan at Rs. 9/km (Pune) ', couponcode: "GETDEAL", condition:" <ol><li><span> Book a ride on the Ola Prime Sedan at just Rs. 9/km till 15km &amp; Rs.15/km after 15 km.</span></li><li><span> Valid in Pune.</span></li><li><span> No coupon code is required to avail of this offer.</span></li></ol>"}, 
   {off: '15%', title: ' 15% Cashback via Standard Chartered DigiSmart Credit Card ', couponcode: "DEBIT15", condition:" <ol><li><span> Get 15% cashback on Ola rides via Standard Chartered DigiSmart Credit Card.</span></li><li><span> Maximum cashback is Rs. 600 per month.</span></li></ol>"}, 
   
  ]
  return data

 }

 public getfooddata()
 {
   
     let data=[
    {off: '40%', title: ' Zomato Coupons: Flat 40% Off on Your Orders ', couponcode:"ZOMATO", condition: "<ol><li><span> Get flat 40% off on your orders.</span></li><li><span> Maximum discount is Rs. 100.</span></li><li><span> Not valid on COD payments.</span></li><li><span> Valid on select restaurants.</span></li><li><span> Use the code to avail the offer.</span></li></ol>"},
    {off: '60%', title: ' Flat 60% Off on Your Orders ', couponcode: "ZOMATO60", condition: "<ol><li><span> Get flat 60% off on your orders from select restaurants.</span></li><li><span> Valid only when you pay for your order online.</span></li><li><span> Maximum discount is Rs. 75.</span></li></ol>"}, 
    {off: '50%', title: ' New User Offer: Flat 50% Off on your First 5 Orders ', couponcode: "ZOMATONEW", condition:"<ol><li><span> Get flat 50% off on your first 5 orders on Zomato.</span></li><li><span> Maximum discount is Rs. 100 per order.</span></li><li><span> Not valid on COD users.</span></li><li><span> Users can earn 10% Z-coins with every transaction.</span></li><li><span> Use the coupon code to avail the offer.</span></li></ol>"},
    {off: '50%', title: ' Flat 50% Off on Your Orders ', couponcode: "AWESOME", condition: "<ol><li><span> Get flat 50% off on your orders from select restaurants.</span></li><li><span> Minimum order is Rs. 99.</span></li><li><span> Valid only when you pay for your order online.</span></li><li><span> Maximum discount is Rs. 75.</span></li></ol>"}, 
    {off: '40%', title: ' Trending Restaurants Around You at the Best Prices ', couponcode: "GETDEAL",condition: "<ol><li><span> Order food online from your favorite restaurants through Zomato.</span></li><li><span> No coupon code needed.</span></li></ol>"},
    {off: '30%', title: ' Flat 30% Off on Orders above Rs. 400 ', couponcode: "ZOMATO300", condition: "<ol><li><span> Get flat 30% off on your orders from select restaurants.</span></li><li><span> Minimum order is Rs. 400.</span></li><li><span> Maximum discount is Rs. 300.</span></li><li><span> Use the Zomato couponcode to avail the offer.</span></li></ol>"}, 
    {off: '100', title: " Domino's Pizza Offer: 2 Medium Pizzas at Rs. 199 Each ", couponcode: "FIRST50", condition: "<ol><li><span> Get get 2 medium pizzas at Rs. 199 each.</span></li><li><span> No coupon code needed.</span></li></ol>"},
    {off: '50%', title: ' Flat 50% Cashback on Your First Order via PayTM ', couponcode: "DOMINO50", condition: "<ol><li><span> Get flat 50% off on your first order via PayTM.</span></li><li><span> Maximum cashabckis Rs. 150.</span></li></ol>"},

  ]
  return data
 }

 public gethoteldata(){
   let data=
    [
    {off: '50%', title: ' Upto 50% Off on Domestic Hotels\xa0 ', couponcode: "GETSETGO", condition: "<ol><li><span> Upto 50% off on domestic hotels.</span></li><li><span> Applicable only on domestic hotels.</span></li></ol>"},
     {off: '40%', title: ' Upto 25-40% Off on all Domestic Hotels\xa0 ', couponcode: "GOADMIT", condition:" <ol><li><span> Get upto 25-40% off on all domestic hotels.</span></li><li><span> No minimum booking amount needed.</span></li><li><span> 100%wallet can be used over and above the offer.</span></li><li><span> Not applicable on ‘Flash deals’.</span></li></ol>"}, 
     {off: 'BUY 1', title: ' Buy 1 GetNight Free on Domestic Hotels ', couponcode: "BESTBOGO", condition: "<ol><li><span> Get 2 nights for the price of 1 on select domestic hotels.</span></li><li><span> Minimum transaction value is Rs. 10,000.</span></li><li><span> Maximum discount is upto Rs. 4,000.</span></li><li><span> Additional details on the landing page.</span></li></ol>"}, 
     {off: '25%', title: ' Flat 20% Off + Upto Rs. 400 goCash on your First Domestic Hotel Booking ', couponcode: "WELCOME", condition: "<ol><li><span> Get flat 20% off + upto Rs. 400 goCash cashback on your first domestic hotel booking.</span></li><li><span> Valid on selected hotels.</span></li><li><span> Use coupon code to avail the offer.</span></li></ol>"}, 
     {off: 'BUY 5', title: ' Get 1 Night Free on Purchase of Every 5 Nights on Domestic Hotels ', couponcode: "FREESTAY", condition: "<ol><li><span> Get 1 night freeon purchase of every 5 nights on Domestic Hotels.</span></li><li><span> Minimum transaction value is Rs. 8000.</span></li><li><span> Maximum discount is Rs.10000.</span></li><li><span> Applicable only for 4 or more room nights bookings.</span></li><li><span> Additional details on the landing page.</span></li></ol>"},
     {off: '25%', title: ' Flat 25% Off on Domestic Hotels\xa0in Pilgrimage Cities ', couponcode: "DARSHAN", condition:" <ol><li><span> Get flat 25% off on domestic hotels in pilgrimage cities.</span></li><li><span> Maximum discount is Rs.10,000.</span></li><li><span> Use coupon code to avail the offer.</span></li></ol>"} 
   ]
   return data
 }
 public getflightdata(){

    let data=
    [
    {off: 'Rs.1500', title: ' Winter Sale: Upto Rs.1,500 Off on Domestic Flight Booking ', couponcode: "WINTER", condition: "<ol><li><span> Get upto Rs. 1,500 off on domestic flight booking.</span></li><li><span> No Minimum booking value needed.</span></li><li><span> Use coupon code to avail the offer.</span></li></ol>"},
   {off: '1500', title: ' Goibibo Coupons: Upto Rs.1500 Off on Domestic Flight Bookings (New Users) ', couponcode: "FLYNEW", condition: "<ol><li><span> Get flat 8% off on domestic flight booking.</span></li><li><span> Valid only for new users.</span></li><li><span> Maximum discount is Rs. 1,500.</span></li><li><span> Additional details on the landing page.</span></li></ol>"},
    {off: '10000', title: ' Upto Rs.10,000 Off on International Flight Bookings ', couponcode: "MYSTERY", condition:" <ol><li><span> Get upto Rs.10,000 off on international flights.</span></li><li><span> Offer valid across Goibibo Website, Apps &amp; Mweb.</span></li></ol>"},
    {off: '25000', title: ' Upto Rs.25,000 Off on International Flight Bookings ', couponcode: "FLYDREAM", condition:" <ol><li><span> Get upto Rs.25,000 off on international flight bookings.</span></li><li><span> No restriction on travel dates.</span></li><li><span> Use coupon code to avail of this offer.</span></li></ol>"},
     {off: '10%', title: ' Goibibo Promo Code: Upto 10% Off on International Flight Booking (New Users) ', couponcode: "FLYINT", condition: "<ol><li><span> Get upto 10% off on international flight booking.</span></li><li><span> Valid only for new users.</span></li><li><span> Maximum discount is Rs. 10,000.</span></li><li><span> Additional details on the landing page.</span></li></ol>"}, 
     {off: '8%', title: ' Flat 8% Off on International Flights via Axis Bank Cards on Non EMI Transactions (Goibibo Mobile & App) ', couponcode: "GOAXIS", condition: "<ol><li><span> Get flat 8% off (upto Rs. 8000) off on international flight bookings via Axis Bank Credit &amp; Debit Card on Non EMI transactions.</span></li><li><span> Minimum booking amount is Rs.20,000.</span></li><li><span> Valid on Goibibo Mobile Site &amp; App.</span></li><li><span> Additional details on the landing page.</span></li></ol>"},
      {off: '12%', title: ' 12% Off on International Flights via Axis Bank Credit Cards on EMI Transactions (Goibibo Mobile & App) ', couponcode: "AXISEMI", condition: "<ol><li><span> Get 12% off (upto Rs. 8,000) off on international flight bookings via Axis Bank Credit Cards on EMI transactions.</span></li><li><span> Minimum booking is Rs. 20,000.</span></li><li><span> Valid on Goibibo Mobile Site &amp; App.</span></li><li><span> Additional details on the landing page.</span></li></ol>"}
    ]
    return data
  }
}

