import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";


import {NewcourseService} from '../../providers/newcourse-service';
import {NewCourses} from '../../app/model/course';

import {CourseMainPage} from '../coursemain/coursemain';


/*
  Generated class for the EditCourses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-courses',
  templateUrl: 'edit-courses.html'
})
export class EditCoursesPage {

  public newcourses:NewCourses;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               private newcourseService:NewcourseService) {
          this.newcourses = this.navParams.data.newCourse;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCoursesPage');
  }

  submitToEditCourse(form:NgForm){
      this.newcourseService.editCourse(this.newcourses).subscribe(
                          data => {
                            console.log(JSON.stringify(data));
                            this.navCtrl.popTo(CourseMainPage);
                          },
                          err => {
                            console.log("Error : "+err);
                          });
  }
}
