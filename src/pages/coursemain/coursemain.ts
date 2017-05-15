import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {AddCoursesPage} from '../addcourses/addcourses';
import {CoursesPage} from '../courses/courses';

@Component({
  selector: 'page-coursemain',
  templateUrl: 'coursemain.html'
})
export class CourseMainPage {
  institute:any;
   addcourse=AddCoursesPage;
    course=CoursesPage;
  
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}