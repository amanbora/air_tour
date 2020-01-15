import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/addservice.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  constructor(private addservice: AddserviceService) { }

  ngOnInit() {
      this.addservice.getMyServices().subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }

}
