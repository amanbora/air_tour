import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import tt from '@tomtom-international/web-sdk-maps';


@Component({

  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.css'],

  encapsulation: ViewEncapsulation.None

})


export class MapComponent implements OnInit {

  
  ngOnInit() {

    const patnaInitCoordinates = [ 85.1376,25.5941];

    const map = tt.map({

      key: 'OGNyVO5DeoIG8A04Xh9aZijMnTFNqpBZ',
      // basepath: './../../../assets/sdk',
      container: 'map',
      source : 'vector',
      // zoom : 15,
      center: patnaInitCoordinates,

    
      // style: 'tomtom://vector/1/basic-main'

      zoom: 13
    });

    map.addControl(new tt.NavigationControl());


    // const speedyPizzaCoordinates = [28.91595, 37.36729];
    // // tslint:disable-next-line: prefer-const
    // let speedyPizzaCoordinates2 = [25.91595, 85.36729];


    // const marker = new tt.Marker().setLngLat(speedyPizzaCoordinates2).addTo(map);
    // const marker2 = new tt.Marker().setLngLat(speedyPizzaCoordinates2).addTo(map);
    

    this.setDefaultTaxiConfig();

    this.taxiConfig.forEach(function (taxi) {
        const carMarkerElement = document.createElement('div');
        carMarkerElement.innerHTML = taxi.icon;
        new tt.Marker({ element: carMarkerElement, offset: [0, 27] }).setLngLat(taxi.coordinates).addTo(map);
    });


  }


  taxiConfig;
 setDefaultTaxiConfig() {
  this.taxiConfig = [
    this.createTaxi('CAR #1', '#006967', [ 85.1376,25.5941], './../../../assets/images/red3.png'),
    // this.createTaxi('CAR #2', '#EC619F', [], './../../../assets/images/red3.png'),
    // this.createTaxi('CAR #3', '#002C5E', [56.893488, 85.347878], './../../../assets/images/red3.png'),
    // this.createTaxi('CAR #4', '#F9B023', [77.858433, 85.349447], './../../../assets/images/red3.png')
  ];
}

  createTaxi(name, color, coordinates, iconFilePath, iconWidth = 55, iconHeight = 55) {
  return {
    name: name,
    color: color,
    icon: "<img src=" + iconFilePath + " style='width: " + iconWidth + "px; height: " + iconHeight + "px;'>",
    coordinates: coordinates
  };
}




}
