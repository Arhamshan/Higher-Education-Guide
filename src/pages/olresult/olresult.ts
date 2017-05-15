import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import {CoursePage} from '../course/course';


import {NewCourses} from '../../app/model/course';


@Component({
  selector: 'page-olresult',
  templateUrl: 'olresult.html'
})
export class OlresultPage {
 ALStreem:any;
 ALsubject1: any;
 ALsubject2:any;
 ALsubject3:any;
 qualification:any;
 Alevel:any;

 OLMaths:any;
 OLScience:any;
 OLEnglish:any;
 Olevel:any;

 public courseTitleList: any[] =[];
 public coursePeriodList: any[] = [];

  public coursesList: NewCourses[];

  constructor(public navCtrl: NavController, private navParam: NavParams, private alertCtrl: AlertController ) {
    //this.coursesList = this.navParam.data.param1;

    this.Alevel = this.navParam.get('param1');
    this.ALStreem = this.navParam.get('param2');
    console.log("The A/L streem : " + this.ALStreem);
  }

    
getOLResult(){
  if(this.OLMaths == 'A' || this.OLMaths == 'B' || this.OLMaths == 'C'  && this.OLScience == 'A' || this.OLScience == 'B' || this.OLScience == 'C'  && this.OLEnglish == 'A' || this.OLEnglish == 'B' || this.OLEnglish == 'C' ){
      this.Olevel = 'Good';
  }else if(this.OLMaths == 'S' && this.OLScience == 'S' && this.OLEnglish == 'S'){
      this.Olevel = 'Average';      
  }else{
      this.Olevel = 'Not Qualified';
  }
  
}

viewCourses(){
  this.getOLResult();
    this.navCtrl.push(CoursePage, {
    param1: this.Alevel, param2: this.ALStreem, param3: this.Olevel
  });
}


  //this.coursePeriodList = this.navParam.get('param2');



//   this.ALsubject2 = this.navParam.get('param3');
//   this.ALsubject3 = this.navParam.get('param4');
  
//   if(this.ALsubject1 == 'A' || this.ALsubject1 == 'B' || this.ALsubject1 == 'C'  && this.ALsubject2 == 'A' || this.ALsubject2 == 'B' || this.ALsubject2 == 'C'  && this.ALsubject3 == 'A' || this.ALsubject3 == 'B' || this.ALsubject3 == 'C' ){
//       this.Alevel = 'Good';
//   }else if(this.ALsubject1 == 'S' && this.ALsubject2 == 'S' && this.ALsubject3 == 'S'){
//       this.Alevel = 'Average';      
//   }else{
//       this.Alevel = 'Not Qualified';
//   }

//   if(this.OLMaths == 'A' || this.OLMaths == 'B' || this.OLMaths == 'C'  && this.OLScience == 'A' || this.OLScience == 'B' || this.OLScience == 'C'  && this.OLEnglish == 'A' || this.OLEnglish == 'B' || this.OLEnglish == 'C' ){
//       this.Olevel = 'Good';
//   }else if(this.OLMaths == 'S' && this.OLScience == 'S' && this.OLEnglish == 'S'){
//       this.Olevel = 'Average';      
//   }else{
//       this.Olevel = 'Not Qualified';
//   }

// let alert = this.alertCtrl.create({
//     title: 'Your O/L results!',
//     subTitle: 'your data from previouse page:- '+ this.Olevel,
//     buttons: ['OK']
//   });
//   alert.present();







  // let alert = this.alertCtrl.create({
  //   title: 'Your results!',
  //   subTitle: 'your data from previouse page:- '+ this.parameter1+' : '+this.parameter2+', '+this.parameter3+', '+this.parameter4,
  //   buttons: ['OK']
  // });
  // alert.present();
  

  // if(this.ALStreem == 'bio'){
  //   if(this.ALsubject1 == 'A' || this.ALsubject1 == 'B' || this.ALsubject1 == 'C'  && this.ALsubject2 == 'A' || this.ALsubject2 == 'B' || this.ALsubject2 == 'C'  && this.ALsubject3 == 'A' || this.ALsubject3 == 'B' || this.ALsubject3 == 'C' ){
  //     this.qualification = 'BioScience'
  //     this.level = 'Good';
  //     let alert = this.alertCtrl.create({
  //       title: this.qualification,
  //       subTitle: 'Level:  ' + this.level,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }else if(this.ALsubject1 == 'S' && this.ALsubject2 == 'S' && this.ALsubject3 == 'S'){
  //     this.qualification = 'BioScience'
  //     this.level = 'Average';
  //     let alert = this.alertCtrl.create({
  //       title: this.qualification,
  //       subTitle: 'Level:  ' + this.level,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }else{
  //     this.qualification = 'BioScience'
  //     this.level = 'Not Qualified';
  //     let alert = this.alertCtrl.create({
  //       title: this.qualification,
  //       subTitle: 'Level:  ' + this.level,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
    
  // }else{
  //   let alert = this.alertCtrl.create({
  //       title: 'Nothing',
  //       subTitle: 'Level:  0',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  // }



}
