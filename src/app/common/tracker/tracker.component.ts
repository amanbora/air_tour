import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  res: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition(showPosition);
    //   navigator.geolocation.watchPosition(showPosition2);
    // }

    // function showPosition(position) {
    //   const latlon = position.coords.latitude + ',' + position.coords.longitude;
    //   localStorage.setItem('data', latlon);
    // }
    // function showPosition2(position) {
    //   const latlon = 25.5947 + ',' + 85.0908;
    //   localStorage.setItem('data2', latlon);
    // }


    // this.location();
    // setTimeout(() => {
    //   this.ngOnInit();
    // }, 10000);

    
  }

  location() {
    const url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDm9MO7inWEy-_k6hgApQgCToE1D-AldfY&q=' + localStorage.getItem('data') ;
    this.location2();
    console.log(localStorage.getItem('data')); 
    return url;
  }

  location2() {
    const url2 = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDm9MO7inWEy-_k6hgApQgCToE1D-AldfY&q=' + localStorage.getItem('data2') ;
    
    console.log(localStorage.getItem('data2')); 
    return url2;
  }


  search() {
    const x = ( (document.getElementById('search')) as HTMLInputElement).value;
    console.log(x);

    // const headers = new HttpHeaders({
    //       'Content-Type': 'Application/json',
    // })

    return this.http.get('https://us1.locationiq.com/v1/search.php?key=3199bc66a77470&q=' + x + '&format=json').subscribe((suc) => {
        this.res = suc;
        this.res = this.res[0];
        console.log(this.res);
        const data = this.res.lat + ',' + this.res.lon;
        console.log(data);
        localStorage.setItem('data', data);
        this.location();

    });
  }


}
