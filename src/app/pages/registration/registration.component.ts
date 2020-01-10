import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Phone} from '../../models/Phone'
import { WindowService} from '../../services/window.service'
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
​
​
export class RegistrationComponent implements OnInit {
  windowRef: any;
  phoneNumber = new Phone();
  verificationCode: string;
  user: any;
  items: any;
  userId: 0;

  constructor(private win: WindowService, private firebaseService: FirebaseService,private http: HttpClient ) { }
  ngOnInit() {
    // const new_fire = firebase.initializeApp(environment.firebaseConfig)
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();

    

  }

// Send Vefification Code
  sendLoginCode() {

    

    // if(isAlreadyPresent())
    // {
    //   //get the userId of the user
    // }
    // else{
    //   //create new user
    // }

    const appVerifier = this.windowRef.recaptchaVerifier;    
    const num = this.phoneNumber.e164;
    console.log(num);
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
            })
            .catch( error => console.log(error) );
  }


  // Sign-In Function
  verifyLoginCode() {
    
    
    this.windowRef.confirmationResult.confirm(this.verificationCode).then( result => {
          console.log('Phone number = ' + this.phoneNumber.e164);
          console.log('OTP Sent = ' + this.verificationCode);
          console.log('UserID =' + result.user.uid);

          
          // this.user = result.user.uid;

          // let uid = this.existingUser(this.phoneNumber);
          // before sending verification code check whether the phone number is already in the database

          // if (uid != null) {
          //   return this.userId = uid;
          // }
          
          // new user
          this.firebaseService.createUser(this.phoneNumber.e164,this.verificationCode,result.user.uid).then(res => {
             console.log("SUCCESSFULLY DONE , PLEASE CHECK DATABASE !!!");
          })
    })
    .catch( error => console.log(error, "Incorrect code entered?"));

  }
}
