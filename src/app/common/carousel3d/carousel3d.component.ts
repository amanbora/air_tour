import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel3d',
  templateUrl: './carousel3d.component.html',
  styleUrls: ['./carousel3d.component.css']
})
export class Carousel3dComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


public currdeg =0;

public next1(){
 this.currdeg=this.currdeg-90;
let element = document.getElementById('loop')
element.style.transform = "rotateY("+this.currdeg+"deg)";
}
public prev1(){
this.currdeg=this.currdeg+90;
let element = document.getElementById('loop')
element.style.transform = "rotateY("+this.currdeg+"deg)";

}
}
