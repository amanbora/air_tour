import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/addservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private addservice: AddserviceService) { }

  ngOnInit() {
      this.addservice.getMyServices().subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }

}
