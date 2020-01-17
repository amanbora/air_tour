import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  mlData: any;
  constructor(private machine: MachineService) { }

  ngOnInit() {
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
          this.mlData = JSON.stringify(data);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      ); }


}
