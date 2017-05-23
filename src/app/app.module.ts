import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AuthService} from "../providers/auth-service";
import {Storage, IonicStorageModule} from "@ionic/storage";
import {JwtHelper, AuthConfig, AuthHttp} from "angular2-jwt";
import {CustomFormsModule} from 'ng2-validation'

import {LoginPage} from '../pages/login/login';
import {SignUpPage} from '../pages/signup/signup';
import {StreemPage} from '../pages/streem/streem';
import {OlresultPage} from '../pages/olresult/olresult';
import {CoursePage} from '../pages/course/course';
import {CoursedetailsPage} from '../pages/coursedetails/coursedetails';
import {AddCoursesPage} from '../pages/addcourses/addcourses';
import {CoursesPage} from '../pages/courses/courses';
import{CourseMainPage} from '../pages/coursemain/coursemain';
import{ImagePage} from '../pages/image/image';
import{EditCoursesPage} from '../pages/edit-courses/edit-courses';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {NewcourseService} from '../providers/newcourse-service';

export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  const authConfig = new AuthConfig({
    tokenGetter: (() => storage.get('jwt')),
  });
  return new AuthHttp(authConfig, http, options);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    StreemPage,
    OlresultPage,
    CoursePage,
    CoursedetailsPage,
    AddCoursesPage,
    CoursesPage,
    CourseMainPage,
    ImagePage,
    EditCoursesPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'myapp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    StreemPage,
    OlresultPage,
    CoursePage,
    CoursedetailsPage,
    AddCoursesPage,
    CoursesPage,
    CourseMainPage,
    ImagePage,
    EditCoursesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NewcourseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    JwtHelper, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    }
  ]
})
export class AppModule {}
