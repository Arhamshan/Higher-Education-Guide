import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';


import {LoginPage} from '../login/login';
import {AddCoursesPage} from '../addcourses/addcourses';


@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
   
})
export class CoursesPage {
  institute:any;
  addcourse=AddCoursesPage;
  
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

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
  

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}
