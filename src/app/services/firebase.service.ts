import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase) { }

  createUser(data,value,uid){    
    return this.db.object('/' + 'user/'+ uid).set({
      Phone_number : data,
      Current_OTP : value
    });
  }
}
