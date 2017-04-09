import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  institute:any;
  constructor(public navCtrl: NavController) {

  }

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}
