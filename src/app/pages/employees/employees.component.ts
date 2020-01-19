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

  url = 'http://localhost:3201/';


  ngOnInit() {

    this.getdrivers();
    this.getPorters();
  }
  openform = false;
  openform1 = false;
  

  drivers :  NewArray[];
  porters :  NewArray[];
  Drivers :  NewArray;
  Porters :  NewArray;




  getdrivers()
  { 
    
    this.http.get<NewArray[]>(this.url+'official/ourDrivers').subscribe(data =>{
      console.log(data);
      this.drivers = data as NewArray[];
      console.log(this.drivers);
    },
    error => console.log(error)
    );
  
  }

  getPorters()
  { 
    
    this.http.get<NewArray[]>(this.url+'official/ourPorters').subscribe(data =>{
      console.log(data);
      this.porters = data as NewArray[];
      console.log(this.porters);
    },
    error => console.log(error)
    );
  
  }

  addDriver()
  {
    this.openform =true;
    this.openform1 = false;
  }
  addPorter()
  {
    this.openform1 =true;
    this.openform = false;
  }

  submitDriver()
  { 
    this.http.post(this.url+'working/addDriver ',this.Drivers).subscribe(
      result=>{console.log(result)
     
      }
       
      ,error =>console.log(error));
  }

  submitPorter()
  { 
    this.http.post(this.url+'working/addPorter ',this.Porters).subscribe(
      result=>{console.log(result)
     
      }
       
      ,error =>console.log(error));
  }




}
