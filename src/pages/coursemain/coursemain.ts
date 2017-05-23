import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {AddCoursesPage} from '../addcourses/addcourses';
import {CoursesPage} from '../courses/courses';
import{ImagePage} from '../image/image';
//import services
import {AuthService} from '../../providers/auth-service';


@Component({
  selector: 'page-coursemain',
  templateUrl: 'coursemain.html'
})
export class CourseMainPage {
  institute:any;
   addcourse=AddCoursesPage;
    course=CoursesPage;
    image=ImagePage;
  
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public authService: AuthService) {

  }

  logUserOut(){
    this.authService.logout();
  }
  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}