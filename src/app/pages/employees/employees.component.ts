import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../models/NewUser';
import { HttpClient } from '@angular/common/http';

interface NewArray{
  name : string,
  phone : number;
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private http :HttpClient) { }

  url = 'http://localhost:3201/official/';


  ngOnInit() {

    this.getdrivers();
    this.getPorters();
  }
  

  drivers :  NewArray[] = [];
  porters :  NewArray[] = [];


  getdrivers()
  { 
    
    this.http.get<NewArray[]>(this.url+'ourDrivers').subscribe(data =>{
      console.log(data);
      this.drivers = data as NewArray[];
      console.log(this.drivers);
    },
    error => console.log(error)
    );
  
  }

  getPorters()
  { 
    
    this.http.get<NewArray[]>(this.url+'ourPorters').subscribe(data =>{
      console.log(data);
      this.porters = data as NewArray[];
      console.log(this.porters);
    },
    error => console.log(error)
    );
  
  }



}
