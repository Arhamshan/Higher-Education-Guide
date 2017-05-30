import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {NgForm} from "@angular/forms";

//import services
import {AuthService} from '../../providers/auth-service';
import {NewcourseService} from '../../providers/newcourse-service';
import {NewCourses} from '../../app/model/course';
import{CoursesPage} from'../courses/courses';
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

  public id:number;
  public level:string;
  public newcourses:NewCourses;
  public alstreem:string;
  public alresult:string;
  public olresult:string;
  public courseperiod:string;
  public coursedetails:string;
  public title:string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               private newcourseService:NewcourseService,
               private authService:AuthService, private alertCtrl: AlertController) {
          this.newcourses = new NewCourses();
          this.newcourses = this.navParams.data.newCourse;
          
          this.id = this.newcourses.id;
          this.level = this.newcourses.level;
          this.title = this.newcourses.title;
          this.alstreem = this.newcourses.alstreem;
          this.alresult = this.newcourses.alresult;
          this.olresult = this.newcourses.olresult;
          this.courseperiod = this.newcourses.courseperiod;
          this.coursedetails = this.newcourses.coursedetails;
    console.log("constructor : "+JSON.stringify(this.newcourses));
    

  }

  ionViewWillEnter() {
    this.newcourses = new NewCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCoursesPage');
  }

  editlevel(){
    this.newcourses.level = this.level;
  }


  editalstreem(){
     this.newcourses.alstreem=this.alstreem  ;
               
  }
  editalresult(){  this.newcourses.alresult=this.alresult;}

  editolresult(){ this.newcourses.olresult=this.olresult ;}

  editcourseperiod(){this.newcourses.courseperiod=this.courseperiod ;}

  edittitle(){
       this.newcourses.title=this.title;
  }

  editcoursedetails(){
      this.newcourses.coursedetails=this.coursedetails;
  }

  cancel(){
   this.navCtrl.popTo(CoursesPage);
 }
 
 logUserOut(){
    this.authService.logout();
  }

  submitToEditCourse(form:NgForm){
      this.newcourses.id = this.id;
      this.newcourses.level = this.level;
      this.newcourses.alstreem=this.alstreem  ;
      this.newcourses.alresult=this.alresult;
      this.newcourses.olresult=this.olresult ;
      this.newcourses.courseperiod=this.courseperiod ;
      this.newcourses.title=this.title;
      this.newcourses.coursedetails=this.coursedetails;

    console.log("submitToEditCourse"+JSON.stringify(this.newcourses));
      this.newcourseService.editCourse(this.newcourses).subscribe(
                          data => {
                            console.log(JSON.stringify(data));
                            let alert = this.alertCtrl.create({
                              title: 'Success!',
                              subTitle: 'Updated the course',
                              buttons: ['OK']
                            });
                            alert.present();
                            this.navCtrl.popToRoot();
                          },
                          err => {
                            console.log("Error : "+err);
                          });
  }
}
