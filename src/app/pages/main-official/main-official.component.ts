import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-official',
  templateUrl: './main-official.component.html',
  styleUrls: ['./main-official.component.css']
})
export class MainOfficialComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  userListPage()
  {
    this.router.navigate(['/official']);
  }
  employees()
  {
    this.router.navigate(['/employees']);
  }
}
