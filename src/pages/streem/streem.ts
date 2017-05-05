import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

//import html pages
import {LoginPage} from '../login/login';
import {OlresultPage} from '../olresult/olresult';

//import services
import {UsersService} from '../../providers/users-service';

@Component({
  selector: 'page-streem',
  templateUrl: 'streem.html',
  providers: [UsersService]
})
export class StreemPage {
    streem:any;
    subject1:any;
    subject2:any;
    subject3:any;
    subject4:any;

    subject1Field:any;
    subject2Field:any;
    subject3Field:any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private usersService: UsersService) {
    this.defaultStreem();
    this.loadingStreem();
  }

  defaultStreem(){
      this.streem = 'bio';
  }
  olResultPage(){
    this.navCtrl.push(OlresultPage, {
    param1: this.streem, param2: this.subject1Field, param3: this.subject2Field, param4:this.subject3Field
  });
  }

  logUserOut(){
    this.usersService.logoutUser().then(() =>{
      this.navCtrl.setRoot(LoginPage);
    });

  }

loadingStreem(){
    //this.streem = 'bio';
    if(this.streem=="maths"){
      this.subject1 = 'Com.Maths';
      this.subject2 = 'Chemistry';
      this.subject3 = 'physics';

    }else if(this.streem=="bio"){
      this.subject1 = 'Biology';
      this.subject2 = 'Chemistry';
      this.subject3 = 'physics';
    }else if(this.streem=="commerce"){
      this.subject1 = 'Accounting';
      this.subject2 = 'Bussines study';
      this.subject3 = 'Economics';
    }else if(this.streem=="arts"){
      this.subject1 = 'Geaography';
      this.subject2 = 'Economics';
      this.subject3 = 'Art';
    }  
}


getALResult(){
  let alert = this.alertCtrl.create({
    title: 'Your results!',
    subTitle: this.streem+' : '+this.subject1Field+', '+this.subject2Field+', '+this.subject3Field,
    buttons: ['OK']
  });
  alert.present();
}



}
