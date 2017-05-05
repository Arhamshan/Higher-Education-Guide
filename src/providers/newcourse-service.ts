import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

/*
  Generated class for the NewcourseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewcourseService {

  public newCourses: any;

  constructor(public http: Http) {
    console.log('Hello NewcourseService Provider');

    this.newCourses = firebase.database().ref('newcourses');

  }

  viewCourse(courseId: any){
    var courseRef = this.newCourses.child(courseId);
    return courseRef.once('value')
  }

  // viewCourse(){
  //   var courseRef = this.newCourses;
  //   return courseRef.once('value')
  // }

}
