import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../models/NewUser';
import { HttpClient } from '@angular/common/http';

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

  drivers : NewUser[] =[];
  porters : NewUser[] =[];

  config = {
    params: { name : '' }
  };

  getdrivers()
  { 
    
    this.http.get<NewUser[]>(this.url+'ourDrivers').subscribe(data =>{
      console.log(data);
      this.drivers = data as NewUser[];
    },
    error => console.log(error)
    );
  
  }

  getPorters()
  { 
    
    this.http.get<NewUser[]>(this.url+'ourPorters').subscribe(data =>{
      console.log(data);
      this.porters = data as NewUser[];
    },
    error => console.log(error)
    );
  
  }



}
