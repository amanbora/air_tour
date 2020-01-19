import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';


interface ima{
  url : string,
  name : string
}


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit {
  mlData: any;
  constructor(private machine: MachineService) { }

  imageUrl: ima[] = [];

  ngOnInit() {


    this.imageUrl.push( {'url' : './../../../assets/images/img-data/BahíaCentroamericaRestaurant.jpg' , 'name': 'Bahía Centroamerica'});
  
    this.imageUrl.push( { 'url' :'./../../../assets/images/img-data/battiste-cajun-1.png', 'name': 'battiste-cajun-1'});
    this.imageUrl.push({ 'url': './../../../assets/images/img-data/burger-king-restaurant-interior-bangkok-thailand-june-often-abbreviated-as-bk-global-chain-hamburger-fast-food-64599797.jpg', 'name': 'Burger-king'});

  }

  funcHello() {
    this.machine.hello().then(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    ); }

    funcRecommend() {
      this.machine.recommend().then(
        data => {
          this.mlData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      ); }


}
