import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';


import {LoginPage} from '../login/login';
import {AddCoursesPage} from '../addcourses/addcourses';
import {NewcourseService} from '../../providers/newcourse-service';

import {EditCoursesPage} from '../edit-courses/edit-courses';
import {CourseMainPage} from '../coursemain/coursemain';
import {CoursedetailsPage} from '../coursedetails/coursedetails';


import {NewCourses} from '../../app/model/course';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
  
})
export class CoursesPage {
  institute:any;
  addcourse=AddCoursesPage;
  public newCoursesList:NewCourses[];
  
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private newcourseService:NewcourseService) {
                console.log("CoursesPage called");

       this.getAllCourseList();
  }

  getAllCourseList(){
    console.log("getAllCourseList called");
      this.newcourseService.getNewCourses()
          .subscribe(
            data => {
              this.newCoursesList = data;
              console.log(JSON.stringify(this.newCoursesList));
            
            },
            err => {
              this.newCoursesList = [];
              console.log("Error : "+err);
            });
  }

  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Operation',
    message: 'Do you want to really delete?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          console.log('Delete clicked');
        }
      }
    ]
  });
  alert.present();
}

doConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Operation',
    message: 'Do you want to update?',
    buttons : [
      {
        text: 'Update',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Cancel',
        handler: () => {
          console.log('Agree clicked');
        }
      }
    ]
  });
  alert.present();
}

editCourse(newCourse:NewCourses){
   console.log("editCourse : "+JSON.stringify(newCourse));
  this.navCtrl.push(EditCoursesPage,{newCourse:newCourse});
}

viewCourse(newCourse:NewCourses){
   console.log("viewCourse : "+JSON.stringify(newCourse));
  this.navCtrl.push(CoursedetailsPage,{param1:newCourse});
}


deleteCourse(newCourse:NewCourses){
  this.newcourseService.deleteCourse(newCourse.id).subscribe(
                          data => {
                            console.log(JSON.stringify(data));
                            this.navCtrl.popTo(CourseMainPage);
                          },
                          err => {
                            console.log("Error : "+err);
                            this.navCtrl.popTo(CourseMainPage);
                          });
}  

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}


