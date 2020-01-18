

import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../models/NewUser';
import { HttpClient } from '@angular/common/http';

interface NewArray{
  name : string,
  userList : NewUser[];
}
@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})




export class OfficialComponent implements OnInit {

  

 
  constructor(private http:HttpClient) { }

  

  serviceArray : NewArray[] = [];

  TaxiServiceUserList : NewUser[] = [];
  CheckInServiceUserList: NewUser[] = [];
  ChildServiceUserList : NewUser[]= [];
  PorterServiceUserList: NewUser[] = [];

  url = 'http://localhost:3201/official/peopleWithService';
  



  ngOnInit() {
    this.getChildServiceUserList();
    this.getCheckInServiceUserList();
    this.getLuggageServiceUserList();
    this.getTaxiServiceUserList();


    this.serviceArray.push({'name' :'Child-Service', userList :this.ChildServiceUserList});

    this.serviceArray.push({'name' :'Taxi-Service', userList :this.TaxiServiceUserList});

    this.serviceArray.push({'name' :'Porter-Service', userList :this.PorterServiceUserList});
    
    this.serviceArray.push({'name' :'CheckIn-Service', userList :this.CheckInServiceUserList});


   

  }
  config = {
    params: { name : '' }
  };
 getChildServiceUserList()
  {
    this.config.params.name ='ChildService';
    this.http.get<NewUser[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.ChildServiceUserList = data as NewUser[];
    },
    error => console.log(error));
  }
  getCheckInServiceUserList()
  {
    this.config.params.name ='CheckInService';
    this.http.get<NewUser[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.CheckInServiceUserList = data;
    },
    error => console.log(error));
  }
  getLuggageServiceUserList()
  {
    this.config.params.name ='LuggageService';
    this.http.get<NewUser[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.PorterServiceUserList = data;
    },
    error => console.log(error));
  }
  getTaxiServiceUserList()
  {
    this.config.params.name ='ChildService';
    this.http.get<NewUser[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.TaxiServiceUserList = data;
    },
    error => console.log(error));
  }
  




}
