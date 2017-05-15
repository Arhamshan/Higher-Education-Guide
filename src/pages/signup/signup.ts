import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

//import html pages
import {StreemPage} from '../streem/streem';
import {LoginPage} from '../login/login';

//import services
import {UsersService} from '../../providers/users-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersService]
})
export class SignUpPage {
  institute:any;
  public emailField: any;
  public passwordField: any;
  public usernameField: any;
  private userType: any;
  private users = [];
  private usersList: any;
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private usersService: UsersService, private loadingCtrl: LoadingController) {

  }

  signUserUp(){
    // this.usersService.signUpUser(this.emailField, this.passwordField, this.usernameField, this.userType)
    //   .then(authData =>{
    //     //successfull login
    //     let alert = this.alertCtrl.create({
    //       title: 'Success!',
    //       subTitle: 'Your account created successfully',
    //       buttons: ['OK']
    //     });
    //     alert.present();

    //     this.navCtrl.setRoot(StreemPage);
    //   }, error =>{
    //       loader.dismiss().then(()=>{
    //         let alert = this.alertCtrl.create({
    //           title: 'Error!',
    //           subTitle: error.message,
    //           buttons: ['OK']
    //         });
    //         alert.present();
    //       });
    //   });

    //   let loader = this.loadingCtrl.create({
    //     dismissOnPageChange: true,
    //     content: 'Creating your account...'
    //   });

    //   loader.present();

  }

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}
