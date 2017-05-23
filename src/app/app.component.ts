import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {JwtHelper, AuthConfig, AuthHttp} from "angular2-jwt";

import { LoginPage } from '../pages/login/login';
import {StreemPage} from '../pages/streem/streem';
import {CourseMainPage} from '../pages/coursemain/coursemain';
import {User} from './model';

import {AuthService} from '../providers/auth-service';

//import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;
  public userRole:number = 0;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private readonly authService: AuthService, public jwtHelper:JwtHelper) {
    //this.rootPage  = LoginPage;
    
    
  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBjnYaaGVxHD4auAiMGAbh1obThGCd_Lls",
  //   authDomain: "higher-education-guid.firebaseapp.com",
  //   databaseURL: "https://higher-education-guid.firebaseio.com",
  //   projectId: "higher-education-guid",
  //   storageBucket: "higher-education-guid.appspot.com",
  //   messagingSenderId: "945879980858"
  // };
  // firebase.initializeApp(config);

  // firebase.auth().onAuthStateChanged((user) => {
  //   if(user){
  //     this.rootPage = StreemPage;
  //   }else{
  //     this.rootPage = LoginPage;
  //   }

  // });

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // this.authService.authUser.subscribe(jwt => {
    //   if (jwt) {
    //     const decoded = this.jwtHelper.decodeToken(jwt);
    //     this.user = decoded.sub
    //   }
    //   else {
    //     this.user = null;
    //   }
    // });

    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        
        const decoded = this.jwtHelper.decodeToken(jwt);
        console.log('decoded : '+ JSON.stringify(decoded));
        this.userRole = decoded.role
        console.log('user role : '+ this.userRole);
        if(this.userRole == 2){
          console.log('student user : ');
          this.rootPage = StreemPage;
          
        }
        else{
          console.log('Institute  user');
          this.rootPage = CourseMainPage;
        }
        
      }
      else{
        this.rootPage = LoginPage;
      }
    });

    this.authService.checkLogin();

  }
}

