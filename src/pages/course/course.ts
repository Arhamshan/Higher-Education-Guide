import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';

import{CoursedetailsPage} from '../coursedetails/coursedetails';

import {NewCourses} from '../../app/model/course';

//import services
import {AuthService} from '../../providers/auth-service';
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
  constructor(public navCtrl: NavController, private navParam: NavParams, 
              private alertCtrl: AlertController, 
              private newCourseService: NewcourseService, 
              private authService:AuthService) {

        this.Alevel = this.navParam.get('param1');
        this.ALstreem = this.navParam.get('param2');
        this.Olevel = this.navParam.get('param3');
        console.log('A/L is :  ' + this.Alevel);
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
          for(let newcourse of this.coursesList){
            if(newcourse.alstreem == this.ALstreem || newcourse.alstreem == "Any"){
              
              if(this.Alevel == 'Good'){
                this.suitableCourseList.push(newcourse);
              }else if(this.Alevel == 'Average'){
                if(newcourse.alresult == 'Average' || newcourse.alresult == 'Not Required'){
                  if(this.Olevel == 'Good'){
                    this.suitableCourseList.push(newcourse);
                  }else if(this.Olevel == 'Average'){
                    if(newcourse.olresult == 'Average' || newcourse.olresult == 'Not Required'){
                      this.suitableCourseList.push(newcourse);
                    }
                  }else if(this.Olevel == 'Not Qualified'){
                    //Console.log('OL Not required : ' + newcourse.title);
                    if(newcourse.olresult == 'Not Required'){
                      this.suitableCourseList.push(newcourse);
                    }
                  }
                }
              }else if(this.Alevel == 'Not Qualified'){
                if(newcourse.alresult == 'Not Required'){
                  if(this.Olevel == 'Good'){
                    this.suitableCourseList.push(newcourse);
                  }else if(this.Olevel == 'Average'){
                    if(newcourse.olresult == 'Average' || newcourse.olresult == 'Not Required'){
                      this.suitableCourseList.push(newcourse);
                    }
                  }else if(this.Olevel == 'Not Qualified'){
                    if(newcourse.olresult == 'Not Required'){
                      this.suitableCourseList.push(newcourse);
                    }
                  }
                }
              }       
            }
          }
      },
      error => alert(error),
      () => console.log('Finished the request!')
    );

}

logUserOut(){
    this.authService.logout();
  }


}
