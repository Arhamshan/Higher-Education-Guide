import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import {StreemPage} from '../pages/streem/streem';

//import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage  = LoginPage;
    
    
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
  }
}

