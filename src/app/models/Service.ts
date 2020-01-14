import * as firebase from 'firebase';

export class Service {
    constructor(
        public name : string,
        public  user =  firebase.auth().currentUser,
        public  airport  =  'airport',
        public   date = new Date()
    ) {} 

}