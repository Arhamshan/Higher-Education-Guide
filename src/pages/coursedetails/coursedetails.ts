import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {NewCourses} from '../../app/model/course';
//import services
import {AuthService} from '../../providers/auth-service';

@Component({
  selector: 'page-coursedetails',
  templateUrl: 'coursedetails.html'
})
export class CoursedetailsPage {
  private alResultRequired:any;
  public course: NewCourses;
  constructor(public navCtrl: NavController, 
              private navParam: NavParams, 
              private authService:AuthService) {
    this.course = this.navParam.data.param1

    if(this.course.alresult == 'Good'){
      this.alResultRequired = 'Minimum 3 C';
    }else if(this.course.alresult == 'Average'){
      this.alResultRequired = 'Minimum 3 S';
    }else{
      this.alResultRequired = 'Not Required';
    }

  }

  courseDetail(){
    console.log('you course detail: ' + this.course.title);
  }

  logUserOut(){
    this.authService.logout();
  }

}
