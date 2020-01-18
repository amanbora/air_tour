

import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../models/NewUser';
import { HttpClient } from '@angular/common/http';

interface NewArray{
  servicename : string,
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

  TaxiServiceUserList : NewUser[] = [{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850}];
  CheckInServiceUserList: NewUser[] = [{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850}];
  ChildServiceUserList : NewUser[]= [{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850}];
  LuggageServiceUserList: NewUser[] = [{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850},{'name' :'Avinash','phn':7050701850}];

  url = 'http://localhost:3201';
  



  ngOnInit() {
    // this.getChildServiceUserList();
    // this.getCheckInServiceUserList();
    // this.getLuggageServiceUserList();
    // this.getTaxiServiceUserList();


    this.serviceArray.push({'servicename' :'Child-Service', userList :this.ChildServiceUserList});

    this.serviceArray.push({'servicename' :'Taxi-Service', userList :this.TaxiServiceUserList});

    this.serviceArray.push({'servicename' :'Luggage-Service', userList :this.LuggageServiceUserList});
    
    this.serviceArray.push({'servicename' :'CheckIn-Service', userList :this.CheckInServiceUserList});


   

  }

 getChildServiceUserList()
  {
    this.http.get<NewUser[]>(this.url+'/ChildServiceUserList').subscribe(data =>{
      this.ChildServiceUserList = data as NewUser[];
    },
    error => console.log(error));
  }

  getCheckInServiceUserList()
  {
    this.http.get<NewUser[]>(this.url+'/CheckInServiceUserList').subscribe(data =>{
      this.CheckInServiceUserList = data; 
    },
    error => console.log(error));
  }

  getLuggageServiceUserList()
  {
    this.http.get<NewUser[]>(this.url+'/LuggageServiceUserList').subscribe(data =>{
      this.LuggageServiceUserList = data; 
    },
    error => console.log(error));
  }

  getTaxiServiceUserList()
  {
    this.http.get<NewUser[]>(this.url+'/TaxiServiceUserList').subscribe(data =>{
      this.TaxiServiceUserList = data; 
    },
    error => console.log(error));
  }

  




}
