import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';

//import html pages
import {SignUpPage} from '../signup/signup';
import {StreemPage} from '../streem/streem';
import {CoursesPage} from '../courses/courses';

//import services
import {UsersService} from '../../providers/users-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersService]
})
export class LoginPage {
  public emailField: any;
  public passwordField: any;
  private users = [];
  private usersList: any;
  

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private loadingCtrl: LoadingController, private alertCtrl: AlertController,  private usersService: UsersService) {
      //this.usernameField = "arhamshan";
      //this.listUsers();
  }

  viewItem(){
      this.navCtrl.push(SignUpPage);
  }

  pickStreem(){
    this.navCtrl.push(StreemPage);
  }

  adminPage(){
      this.navCtrl.push(CoursesPage);
  }

  // loginUser(){
  //   this.usersService.loginUser(this.emailField, this.passwordField)
  //     .then(authData =>{
  //       //successfull login
  //       this.navCtrl.setRoot(StreemPage);
        
  //     }, error =>{
  //         loader.dismiss().then(()=>{
  //           let alert = this.alertCtrl.create({
  //             title: 'Error in Login!',
  //             subTitle: error.message,
  //             buttons: ['OK']
  //           });
  //           alert.present();
  //         })
  //     });

  //     let loader = this.loadingCtrl.create({
  //       dismissOnPageChange: true,
  //     });
  //     loader.present();
      
  //     //student1@gmail.com
  // }

  // forgotPassword(){
  //   let prompt = this.alertCtrl.create({
  //     title: 'Enter your email',
  //     message: "New password will be sent to your email",
  //     inputs: [
  //       {
  //         name: 'recoverEmail',
  //         placeholder: 'Email'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Submit',
  //         handler: data => {
  //           //console.log('Saved clicked');
  //           //preloader
  //           let loading = this.loadingCtrl.create({
  //             dismissOnPageChange: true,
  //             content: 'Reseting your password...'
  //           });
  //           loading.present();
  //           //call reset paswrod service
  //           this.usersService.forgotPasswordUser(data.recoverEmail).then(()=>{
  //             loading.dismiss().then(()=>{
  //               //sshow popup
  //                let alert = this.alertCtrl.create({
  //                 title: 'Check your email!',
  //                 subTitle: 'Password reset successful',
  //                 buttons: ['OK']
  //               });
  //               alert.present();

  //             })

  //           }, error =>{
  //             loading.dismiss().then(()=>{
  //             //show popup
  //              let alert = this.alertCtrl.create({
  //                 title: 'Error reseting password!',
  //                 subTitle: error.message,
  //                 buttons: ['OK']
  //               });
  //               alert.present();
  //             })
  //           });
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

  // listUsers(){
  //   this.usersService.loadUsers(10)
  //     .then(data => {
  //       this.usersList = data;
  //     })
  // } 

}
