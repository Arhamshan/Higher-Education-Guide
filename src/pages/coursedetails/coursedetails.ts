import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {NewCourses} from '../../app/model/course';

@Component({
  selector: 'page-coursedetails',
  templateUrl: 'coursedetails.html'
})
export class CoursedetailsPage {
  private courseTitle:any;
  public course: NewCourses;
  constructor(public navCtrl: NavController, private navParam: NavParams) {
    this.course = this.navParam.data.param1

  }

  courseDetail(){

    console.log('you course detail: ' + this.course.title);
  }

}
