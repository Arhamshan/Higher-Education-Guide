import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {JwtHelper, AuthHttp} from "angular2-jwt";
//import { FormBuilder, ControlGroup } from '@angular2/common';
//import {SERVER_URL} from "../../config";
//import html pages
import {LoginPage} from '../login/login';
import {OlresultPage} from '../olresult/olresult';

//import services
import {AuthService} from '../../providers/auth-service';
import {NewcourseService} from '../../providers/newcourse-service';

import {NewCourses} from '../../app/model/course';

@Component({
  selector: 'page-streem',
  templateUrl: 'streem.html',
  providers: [NewcourseService]
})
export class StreemPage {
    public streem:any;
    public subject1:any;
    public subject2:any;
    public subject3:any;
    public subject4:any;

    public subject1Field:any = 'A';
    public subject2Field:any = 'A';
    public subject3Field:any = 'A';
    public Alevel: any;

    public listCourses:any;

    public suitableCourseList: any[] = [];
    public suitableCoursePeriodList: any[] = [];

    public coursesList: NewCourses[];
    user: string;
    message: string;

  // static get parameters() {
  //   // provide Angular with metadata about things it 
  //   // should inject in the constructor
  //   // http://ionicframework.com/docs/v2/getting-started/tutorial/adding-pages/
  //   return [[FormBuilder]];
  // }

  constructor(public navCtrl: NavController, 
              private alertCtrl: AlertController, 
              private authService: AuthService, 
              private newCourseService: NewcourseService, 
              private readonly jwtHelper: JwtHelper, 
              private readonly  authHttp: AuthHttp) {

    this.defaultStreem();
    this.loadingStreem();
    
    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.user = decoded.sub
      }
      else {
        this.user = null;
      }
    });

    // this.slideOneForm = formBuilder.group({
    //     firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //     lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //     age: ['']
    // });

    // this.myForm = formBuilder.group({
    //   'subject': '',
    //   'message': ''
    // })

  }

  ionViewWillEnter() {
    this.authHttp.get(`http://localhost:8080/rest/secret`).subscribe(
      data => this.message = data.text(),
      err => console.log(err)
    );
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
    this.authService.logout();
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
}


getALResult(){
  if(this.subject1Field == 'A' || this.subject1Field == 'B' || this.subject1Field == 'C'  && this.subject2Field == 'A' || this.subject2Field == 'B' || this.subject2Field == 'C'  && this.subject3Field == 'A' || this.subject3Field == 'B' || this.subject3Field == 'C' ){
      this.Alevel = 'Good';
  }else if(this.subject1Field == 'S' && this.subject2Field == 'S' && this.subject3Field == 'S'){
      this.Alevel = 'Average';      
  }else{
      this.Alevel = 'Not Qualified';
  }
}

}
