import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luggage-service',
  templateUrl: './luggage-service.component.html',
  styleUrls: ['./luggage-service.component.css']
})
export class LuggageServiceComponent implements OnInit {

  luggages = ['Porter','Baggage Wrapping','Lost Baggage'];
  constructor() { }

  ngOnInit() {
  }

}
