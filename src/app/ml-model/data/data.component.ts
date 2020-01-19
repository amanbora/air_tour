import { Component, OnInit } from '@angular/core';

interface ima{
  url : string,
  name : string
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  imageUrl: ima[] = [];
  ngOnInit() {
    this.imageUrl.push( { 'url' :'./../../../assets/images/img-data/Daily_trends.png', 'name': 'Daily Trends'});
    this.imageUrl.push({ 'url': './../../../assets/images/img-data/Monthly_trends.png', 'name': 'Monthly Trends'});
    this.imageUrl.push({ 'url': './../../../assets/images/img-data/Weekends_trend.png', 'name': 'Weekly Trends'});
    this.imageUrl.push({ 'url': './../../../assets/images/img-data/Population_growth.png', 'name': 'Poplution Growth'});

    console.log(this.imageUrl[0].url, this.imageUrl[0].name)
  }

}
