import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-coursedetails',
  templateUrl: 'coursedetails.html'
})
export class CoursedetailsPage {
  private courseTitle:any;

  constructor(public navCtrl: NavController, private navParam: NavParams) {
    this.courseDetail();
  }

  courseDetail(){
    this.courseTitle = this.navParam.get('param1');
    console.log('you course detail: ' + this.courseTitle);
  }

}
