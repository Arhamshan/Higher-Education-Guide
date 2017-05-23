import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,Response  } from '@angular/http';
import 'rxjs/add/operator/map';

//import {SERVER_URL} from "../../config";
import {NewCourses } from '../app/model/course';
import { Observable } from 'rxjs/Observable';
import {AuthHttp} from "angular2-jwt";

/*
  Generated class for the NewcourseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewcourseService {

  public newCourses: any;
  private _headers: Headers;
  private _options: RequestOptions;
  private baseURL:any = 'http://localhost:8080/rest/course';

  constructor(public http: Http, public authHttp: AuthHttp) {
    console.log('Hello NewcourseService Provider');

    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
    // this.newCourses = firebase.database().ref('newcourses');
  }
  getNewCourses(): Observable<NewCourses[]>{
    return this.authHttp.get(this.baseURL)
      .map(res => <NewCourses[]>res.json());
  }

  // viewCourse(courseId: any){
  //   var courseRef = this.newCourses.child(courseId);
  //   return courseRef.once('value')
  // }

  // viewCourse(){
  //   var courseRef = this.newCourses;
  //   return courseRef.once('value')
  // }

  addCourse(course:NewCourses): Observable<NewCourses>{
       const body = JSON.stringify(course);
       let url = this.baseURL+`/course/add`;

      return this.http.post(url, body, this._options)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editCourse(course:NewCourses): Observable<NewCourses>{
       const body = JSON.stringify(course);
       let url = this.baseURL+`/course/edit`;

      return this.http.put(url, body, this._options)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteCourse(id: number): Observable<string>{

    let url = this.baseURL+`/course/delete/${id}`;
    return this.http.delete(url,this._options)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
