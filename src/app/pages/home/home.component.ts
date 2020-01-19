import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public dialog: MatDialog , private http:HttpClient) { }
  userId = localStorage.getItem('userId');

  ngOnInit() {
   
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  sendNotify(){
    console.log("enyererw");
    this.http.post('https://quiet-anchorage-64839.herokuapp.com/working/sendNotification',{}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

  }

}
