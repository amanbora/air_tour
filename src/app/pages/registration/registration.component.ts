import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  user = new User('', null);

  constructor(public userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userservice.signup(this.user)
      .subscribe(
        data => console.log('User data sent to server'),
        error => console.log('Error', error)
        );
  }

}
