import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-flash-screen',
  templateUrl: './flash-screen.component.html',
  styleUrls: ['./flash-screen.component.css']
})
export class FlashScreenComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    localStorage.clear();
}
 userId = localStorage.getItem('userId');
  }

  

