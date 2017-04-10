import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {CoursePage} from '../course/course';

@Component({
  selector: 'page-olresult',
  templateUrl: 'olresult.html'
})
export class OlresultPage {

  constructor(public navCtrl: NavController) {

  }

  viewCourses(){
      this.navCtrl.push(CoursePage);
  }

}
