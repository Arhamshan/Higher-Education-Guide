import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {NgModel} from "@angular/forms";
//import html pages
import {SignUpPage} from '../signup/signup';
import {StreemPage} from '../streem/streem';
import {CoursesPage} from '../courses/courses';

//import services
import {AuthService} from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [UsersService]
})
export class LoginPage {
  public emailField: any;
  public passwordField: any;
  private users = [];
  private usersList: any;
  

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private loadingCtrl: LoadingController, private alertCtrl: AlertController,  private authService: AuthService, private readonly toastCtrl: ToastController) {
      //this.usernameField = "arhamshan";
      //this.listUsers();
  }


  signup() {
    this.navCtrl.push(SignUpPage);
  }

  login(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authService
      .login(value)
      .finally(() => loading.dismiss())
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }


}

  // viewItem(){
  //     this.navCtrl.push(SignUpPage);
  // }

  // pickStreem(){
  //   this.navCtrl.push(StreemPage);
  // }

  // adminPage(){
  //     this.navCtrl.push(CoursesPage);
  // }

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


