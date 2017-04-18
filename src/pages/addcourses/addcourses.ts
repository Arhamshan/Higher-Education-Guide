import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from '../login/login';

@Component({
  selector: 'page-addcourses',
  templateUrl: 'addcourses.html'
})
export class AddCoursesPage {
  institute:any;
  constructor(public navCtrl: NavController) {

  }

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}
