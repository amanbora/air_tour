import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, Form, NgForm} from '@angular/forms';
import {User} from '../../models/user';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public registerservice: RegisterService) { }

  userModel = new User('', '');

  ngOnInit() {
  }

  onSubmit() {
    this.registerservice.signup(this.userModel)
        .subscribe(
          data => console.log('success', data),
          error => console.error('error', error));
        }
}


