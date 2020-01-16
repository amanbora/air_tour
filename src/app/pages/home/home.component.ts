import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public dialog: MatDialog) { }
  userId = localStorage.getItem('userId');

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
