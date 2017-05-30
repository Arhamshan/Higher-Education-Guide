import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {LoginPage} from '../login/login';

import {NewCourses} from '../../app/model/course';
import{CoursesPage} from'../courses/courses';

//import services
import {AuthService} from '../../providers/auth-service';
import {NewcourseService} from '../../providers/newcourse-service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-addcourses',
  templateUrl: 'addcourses.html'
})
export class AddCoursesPage {
  institute:any;
  newcourse : NewCourses;
  constructor(public navCtrl: NavController,
     private newcourseService:NewcourseService, private authService:AuthService, private alertCtrl: AlertController) {
      this.newcourse = new NewCourses();
  }

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }





  submitToAdd(form:NgForm){
      console.log("submitToAdd : "+ JSON.stringify(this.newcourse));
    this.newcourseService.addCourse(this.newcourse)
                        .subscribe(
                          (data:any) => {
                            console.log("scuccess : "+ JSON.stringify(data));
                            let alert = this.alertCtrl.create({
                              title: 'Success!',
                              subTitle: 'Added a new course',
                              buttons: ['OK']
                            });
                            alert.present();
                            this.navCtrl.pop();
                            console.log(data);
                          }
                        );
  }


 cancel(){
   this.navCtrl.popTo(CoursesPage);
 }

 logUserOut(){
    this.authService.logout();
  }


}
