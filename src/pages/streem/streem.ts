import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

//import html pages
import {LoginPage} from '../login/login';
import {OlresultPage} from '../olresult/olresult';

//import services
import {UsersService} from '../../providers/users-service';
import {NewcourseService} from '../../providers/newcourse-service';

import {NewCourses} from '../../app/model/course';

@Component({
  selector: 'page-streem',
  templateUrl: 'streem.html',
  providers: [UsersService, NewcourseService]
})
export class StreemPage {
    public streem:any;
    public subject1:any;
    public subject2:any;
    public subject3:any;
    public subject4:any;

    public subject1Field:any;
    public subject2Field:any;
    public subject3Field:any;
    public Alevel: any;

    public listCourses:any;

    public suitableCourseList: any[] = [];
    public suitableCoursePeriodList: any[] = [];

    public coursesList: NewCourses[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private usersService: UsersService, private newCourseService: NewcourseService) {
    this.defaultStreem();
    this.loadingStreem();
    
    
  }

  defaultStreem(){
      this.streem = 'Bio';
  }
  olResultPage(){
    this.getALResult();
    this.navCtrl.push(OlresultPage, {
    param1: this.Alevel, param2: this.streem
  });
  }

  logUserOut(){
    // this.usersService.logoutUser().then(() =>{
    //   this.navCtrl.setRoot(LoginPage);
    // });

  }

loadingStreem(){
    if(this.streem=="Maths"){
      this.subject1 = 'Com.Maths';
      this.subject2 = 'Chemistry';
      this.subject3 = 'physics';

    }else if(this.streem=="Bio"){
      this.subject1 = 'Biology';
      this.subject2 = 'Chemistry';
      this.subject3 = 'physics';
    }else if(this.streem=="Commerce"){
      this.subject1 = 'Accounting';
      this.subject2 = 'Bussines study';
      this.subject3 = 'Economics';
    }else if(this.streem=="Arts"){
      this.subject1 = 'Geaography';
      this.subject2 = 'Economics';
      this.subject3 = 'Art';
    }

    // this.getSiutableCourseList();
    // this.suitableCourseList = [];
    // this.suitableCoursePeriodList = [];
}


// getALResult(){
//   let alert = this.alertCtrl.create({
//     title: 'Your results!',
//     subTitle: this.streem+' : '+this.subject1Field+', '+this.subject2Field+', '+this.subject3Field,
//     buttons: ['OK']
//   });
//   alert.present();
// }

getALResult(){
  if(this.subject1Field == 'A' || this.subject1Field == 'B' || this.subject1Field == 'C'  && this.subject2Field == 'A' || this.subject2Field == 'B' || this.subject2Field == 'C'  && this.subject3Field == 'A' || this.subject3Field == 'B' || this.subject3Field == 'C' ){
      this.Alevel = 'Good';
  }else if(this.subject1Field == 'S' && this.subject2Field == 'S' && this.subject3Field == 'S'){
      this.Alevel = 'Average';      
  }else{
      this.Alevel = 'Not Qualified';
  }
}


// viewCoursesTest(){
//   this.newCourseService.getNewCourses()
//     .subscribe(
//       data =>{
//         for(let newcourse of data){
//           if(newcourse.alstreem == this.streem || newcourse.alstreem == "Any"  ){
//             this.suitableCourseList.push(newcourse.title);
//             this.suitableCoursePeriodList.push(newcourse.courseperiod);            
//           }
//         }    
//       },
//       error => alert(error),
//       () => console.log('Finished the request!')
//     );
// }

// getSiutableCourseList(){
//   this.newCourseService.getNewCourses()
//     .subscribe(
//       data =>{
//           this.coursesList = data;
//           console.log("required result : " + this.coursesList[0].alstreem)
//       },
//       error => alert(error),
//       () => console.log('Finished the request!')
//     );
// }


}
