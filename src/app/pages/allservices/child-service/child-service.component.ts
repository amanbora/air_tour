import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.css']
})
export class ChildServiceComponent implements OnInit {

  childs = ['Child Travelling Alone', 'Child On-Board'];
  constructor() { }

  ngOnInit() {
  }

}
