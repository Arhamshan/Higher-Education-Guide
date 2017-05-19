import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';

import{CoursedetailsPage} from '../coursedetails/coursedetails';

import {NewCourses} from '../../app/model/course';

//import services
import {NewcourseService} from '../../providers/newcourse-service';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
  providers: [NewcourseService]

})
export class CoursePage {

public ALstreem:any;
private Alevel:any;
private Olevel:any;
public courseTitleList: string[] =[];
public coursePeriodList: any[] = [];
public coursesList: NewCourses[];
public suitableCourseList: NewCourses[] = [];
//newcourse:NewCourses;

public i:number;
  constructor(public navCtrl: NavController, private navParam: NavParams, private alertCtrl: AlertController, private newCourseService: NewcourseService) {

        this.Alevel = this.navParam.get('param1');
        this.ALstreem = this.navParam.get('param2');
        this.Olevel = this.navParam.get('param3');
        console.log('A/L is :  ' + this.Olevel);
        console.log('O/L is :  ' + this.Olevel);
        this.getAllCourseList();
}

  viewCourseDetails(course: NewCourses){
    //console.log("course title : " );
    this.navCtrl.push(CoursedetailsPage, {
    param1: course
  });
}

getAllCourseList(){
  var i =0;
  this.newCourseService.getNewCourses()
    .subscribe(
      data =>{
          this.coursesList = data;

          console.log("required result : " + this.coursesList[0].alstreem);
          for(let newcourse of this.coursesList){
            console.log("Hello streem is : " + newcourse.alstreem);
            if(newcourse.alstreem == this.ALstreem || newcourse.alstreem == "Any"){
              if(newcourse.alresult == this.Alevel){
                this.suitableCourseList.push(newcourse);
              }
            }
          }

          for(let suitableNewcourse of this.suitableCourseList){
            console.log("Hello filtered course is : " + suitableNewcourse.title);
          }
      },
      error => alert(error),
      () => console.log('Finished the request!')
    );

}

filterSiutableCourseList(){
  this.getAllCourseList();
  this.i =0;
  // while(this.coursesList.length = 0){

  //     // if(newcourse.alstreem == this.ALstreem ||   ){
  //       //this.suitableCourseList = newcourse;
  //       this.newcourse = this.coursesList[this.i];
  //       console.log("Hello this is : " + this.newcourse.title);
  //       this.i++;
  //     //}
  // }


}


}
