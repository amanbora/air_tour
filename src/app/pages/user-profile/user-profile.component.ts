import { Component, OnInit } from '@angular/core';
import {UserProfile} from '../../models/UserProfile'
import { User } from 'src/app/models/User';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public userservice : UserService) { }
   
  userProfile = new UserProfile('','',0,'',0);

  ngOnInit() {
  }
  onSubmit()
  {
    
  }

}
