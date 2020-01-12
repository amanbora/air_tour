import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent {

  latitude: any;
  longitude: any;
  locationChosen = false;

  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.longitude = +pos.coords.longitude;
          this.latitude = +pos.coords.latitude;
        });
      }
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

}
