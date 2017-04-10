import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{CoursedetailsPage} from '../coursedetails/coursedetails';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  constructor(public navCtrl: NavController) {

  }
  viewCourseDetails(){
    this.navCtrl.push(CoursedetailsPage);
  }

}
