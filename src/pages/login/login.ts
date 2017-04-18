import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SignUpPage} from '../signup/signup';
import {StreemPage} from '../streem/streem';
import {CoursesPage} from '../courses/courses'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  viewItem(){
      this.navCtrl.push(SignUpPage);
  }

  pickStreem(){
    this.navCtrl.push(StreemPage);
  }

  adminPage(){
      this.navCtrl.push(CoursesPage);
  }

}
