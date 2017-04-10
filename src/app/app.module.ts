import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {LoginPage} from '../pages/login/login';
import {SignUpPage} from '../pages/signup/signup';
import {StreemPage} from '../pages/streem/streem';
import {OlresultPage} from '../pages/olresult/olresult';
import {CoursePage} from '../pages/course/course';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    StreemPage,
    OlresultPage,
    CoursePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    StreemPage,
    OlresultPage,
    CoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
