import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  private data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

  signUpUser(email:string, password:string, username: string, userType:any){
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        //sign in user
        this.fireAuth.signInWithEmailAndPassword(email, password)
          .then((authenticatedUser) => {
            //successfull login, and create user profile
            this.userProfile.child(authenticatedUser.uid).set({
              email: email,
              username: username,
              userType:userType
            });
          });
      });
  }

  loginUser(email:string, password:string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
    return this.fireAuth.signOut()
  }

  forgotPasswordUser(email: any){
    return this.fireAuth.sendPasswordResetEmail(email);
    
  }

  // loadUsers(number){
  //   if(this.data){
  //     return Promise.resolve(this.data);
  //   }

  //   return new Promise(resolve =>{
  //     this.http.get('https://randomuser.me/api/?results='+number)
  //       .map(res => res.json())
  //       .subscribe(data => { 
  //         this.data = data.results;
  //         resolve(this.data);
  //       })
  //   })
  // }

}
