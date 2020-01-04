import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Form, NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {User} from '../../models/user';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  loginDetails: FormGroup;

  constructor(public firebaseService: FirebaseService, private _formBuilder: FormBuilder,) { 
    this.loginDetails = this._formBuilder.group({
      'name': [''],
      'phone_number': [''],
    });;
  }

  ngOnInit() {
  }

  onSubmit(){
    const loginData = new FormData();
    loginData.append('name' , this.loginDetails.value.name );
    loginData.append('phone_number', this.loginDetails.value.phone_number);
    console.log(loginData);
    // console.log(this.loginDetails.value.name , this.loginDetails.value.phone_number);
    
    console.log(this.loginDetails.getRawValue());
    this.firebaseService.createUser(this.loginDetails.value.name,this.loginDetails.value.phone_number)
    .then(
      res => {
        // this.resetFields();
        // this.router.navigate(['/home']);
        console.log("SUCCESSFUL !!!")
      }
    )
  }
}


