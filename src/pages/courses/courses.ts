import { Component } from '@angular/core';
import { NavController ,AlertController,Platform} from 'ionic-angular';


import {LoginPage} from '../login/login';
import {AddCoursesPage} from '../addcourses/addcourses';
import {EditCoursesPage} from '../edit-courses/edit-courses';
import {CourseMainPage} from '../coursemain/coursemain';
import {CoursedetailsPage} from '../coursedetails/coursedetails';

//import services
import {AuthService} from '../../providers/auth-service';
import {NewcourseService} from '../../providers/newcourse-service';


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
              private newcourseService:NewcourseService,
              private platform: Platform,
              private authService:AuthService) {
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

  logUserOut(){
    this.authService.logout();
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
                            //console.log(JSON.stringify(data));
                            let alert = this.alertCtrl.create({
                              title: 'Deleted!',
                              subTitle: 'Successfully deleted the course',
                              buttons: ['OK']
                            });
                            alert.present();
                            this.navCtrl.popTo(CourseMainPage);
     
                          },
                          err => {
                            console.log("Error : "+err);
                            this.navCtrl.popTo(CourseMainPage);
                          });
}

 

}


