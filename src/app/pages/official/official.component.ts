

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface newArray{
  uid :string,
  phone :number
}

interface NewArray{
  name : string,
  userList :newArray[];
}
@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})




export class OfficialComponent implements OnInit {

  

 
  constructor(private http:HttpClient) { }

  

  serviceArray : NewArray[] = [];

  TaxiServiceUserList : newArray[] = [];
  CheckInServiceUserList: newArray[] = [];
  ChildServiceUserList : newArray[]= [];
  PorterServiceUserList: newArray[] = [];

  url = 'http://localhost:3201/official/peopleWithService';
  
 


  ngOnInit() {
    this.getChildServiceUserList();
    this.getCheckInServiceUserList();
    this.getporterServiceUserList();
    this.getTaxiServiceUserList();
    
  

  }


  

  config = {
    params: { name : '' }
  };
 getChildServiceUserList()
  {
    this.config.params.name ='ChildService';
    this.http.get<newArray[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.ChildServiceUserList = data as newArray[];
      this.serviceArray.push({'name' :'ChildService', 'userList' :this.ChildServiceUserList});

    },
    error => console.log(error));
  }
  getCheckInServiceUserList()
  {
    this.config.params.name ='CheckInService';
    this.http.get<newArray[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.CheckInServiceUserList = data as newArray[];
      this.serviceArray.push({'name' :'CheckInService', 'userList' :this.CheckInServiceUserList});

    },
    error => console.log(error));
  }
  getporterServiceUserList()
  {
    this.config.params.name ='porter';
    this.http.get<newArray[]>(this.url,this.config).subscribe(data =>{
      console.log('porters',data);
      this.PorterServiceUserList = data as newArray[];
       
      this.serviceArray.push({'name' :'Porter-Service', 'userList' :this.PorterServiceUserList});
 
    },
    error => console.log(error));
  }
  getTaxiServiceUserList()
  {
    this.config.params.name ='ChildService';
    this.http.get<newArray[]>(this.url,this.config).subscribe(data =>{
      console.log(data);
      this.TaxiServiceUserList = data as newArray[];
      this.serviceArray.push({'name' :'TaxiService', 'userList' :this.TaxiServiceUserList});


    },
    error => console.log(error));
  }
  




}
