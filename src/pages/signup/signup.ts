import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {NgModel} from "@angular/forms";
//import html pages
import {StreemPage} from '../streem/streem';
import {LoginPage} from '../login/login';

//import services
import {AuthService} from '../../providers/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  //providers: [UsersService]
})
export class SignUpPage {
  institute:any;
  public emailField: any;
  public passwordField: any;
  public usernameField: any;
  private userType: any;
  private users = [];
  private usersList: any;
  
  @ViewChild('username')
  usernameModel: NgModel;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private authService: AuthService, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }



  signup(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Signing up ...'
    });

    loading.present();

    this.authService
      .signup(value)
      .finally(() => loading.dismiss())
      .subscribe(
        (jwt) => this.showSuccesToast(jwt),
        err => this.handleError(err));
  }

  private showSuccesToast(jwt) {
    if (jwt !== 'EXISTS') {
      const toast = this.toastCtrl.create({
        message: 'Sign up successful',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
    else {
      const toast = this.toastCtrl.create({
        message: 'Username already registered',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.usernameModel.control.setErrors({'usernameTaken': true});
    }
  }

  handleError(error: any) {
    let message = `Unexpected error occurred`;

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }








  //signUserUp(){
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

  //}

  // instituteChecked(){
  //   if(this.institute.checked){
  //     return true;
  //   } 
  // }

}
