import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from './../../models/User';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user = new User('', '');

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit() {
    this.user.email = this.loginForm.controls.email.value;
    this.user.password = this.loginForm.controls.password.value;

    console.log(this.user);

    this.userService.login(this.user)
    .subscribe(
      data => {
                console.log('Success'),
                this.router.navigateByUrl('/home');
              },
      error => console.log( 'Error', error)
    );

  }
}
