import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from '../login/login';

import {NewCourses} from '../../app/model/course';


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
     private newcourseService:NewcourseService) {
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
                            this.navCtrl.pop();
                            console.log(data);
                          }
                        );
  }


}
