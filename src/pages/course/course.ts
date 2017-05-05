import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';

import{CoursedetailsPage} from '../coursedetails/coursedetails';

//import services
import {NewcourseService} from '../../providers/newcourse-service';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
  providers: [NewcourseService]
  
})
export class CoursePage {

public streem:any;
private Alevel:any;
private Olevel:any;
private courseTitle:any;
//private courseTitle: any;

  constructor(public navCtrl: NavController, private navParam: NavParams, private alertCtrl: AlertController, private courseService: NewcourseService) {
        this.suitableCourses();
        //this.displayCourse('c1');
  }
  viewCourseDetails(){
    this.navCtrl.push(CoursedetailsPage, {
    param1: this.courseTitle
  });
  }

  suitableCourses(){
    this.streem = this.navParam.get('param1')
    this.Alevel = this.navParam.get('param2')
    this.Olevel = this.navParam.get('param3')

  // let alert = this.alertCtrl.create({
  //   title: 'Your O/L results!',
  //   subTitle: 'your data from previouse page:- '+ this.Olevel,
  //   buttons: ['OK']
  // });
  // alert.present();

    if(this.streem=='bio'){
      if(this.Alevel=='Good'){
        this.courseTitle = 'Madicine'
      }
      else if(this.Alevel=='Average'){
        this.courseTitle = 'Pharmacy'
      }      
    
    }else if(this.streem=='maths'){
      if(this.Alevel=='Good'){
        this.courseTitle = 'Engineering'
      }
      else if(this.Alevel=='Average'){
        this.courseTitle = 'Information Technology'
      }
    
    }else if(this.streem=='commerce'){
      if(this.Alevel=='Good'){
        this.courseTitle = 'Information Technology'
      }
      else if(this.Alevel=='Average'){
        this.courseTitle = 'Accounting'
      }
    
    }

  }

  checkButton(){
    this.displayCourse('c1');
    console.log('your old course is : '+ this.courseTitle);
  }


  displayCourse(courseId){
    var that = this;
    this.courseService.viewCourse(courseId).then(snapshot =>{
      this.courseTitle = snapshot.val().title;
    console.log('your new course is : '+ this.courseTitle);
    })
  }

  // displayCourse(courseId){
  //   var that = this;
  //   this.courseService.viewCourse().then(snapshot =>{
  //     this.courseTitle = snapshot.val().title;
  //   console.log('your new course is : '+ this.courseTitle);
  //   })
  // }


}