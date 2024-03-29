import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Phone} from '../../models/Phone';
import { WindowService} from '../../services/window.service';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  showLoginBox = true;
  show = 'false'


  constructor(private win: WindowService, private firebaseService: FirebaseService, private http: HttpClient, private router: Router ) { }
  ngOnInit() {
          if (localStorage.getItem('logged') === 'true') {
            this.router.navigate(['/home']);
          }
          this.windowRef = this.win.windowRef;
          this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
          this.windowRef.recaptchaVerifier.render();

  }

// Send Vefification Code
  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    console.log(num);
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
                this.showLoginBox = false;
                this.show ='true';
            })
            .catch( error => console.log(error) );
  }

  // Sign-In Function
  verifyLoginCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode)
    .then(result => {
              localStorage.setItem('auth', 'true');
              localStorage.setItem('userId', result.user.uid);
              console.log('Phone number = ' + this.phoneNumber.e164);
              console.log('OTP Sent = ' + this.verificationCode);
              console.log('UserID =' + result.user.uid);


              this.user = result.user.uid;

              this.firebaseService.createUser(this.phoneNumber.e164, this.verificationCode, result.user.uid).then(res => {
              localStorage.setItem('logged', 'true');
             console.log('SUCCESSFULLY DONE , PLEASE CHECK DATABASE !!!');
             this.router.navigate(['/about-us']);

         })
        })

    .catch( error => console.log(error, 'Incorrect code entered?'));
  }
}
