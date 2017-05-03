import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private usersService: UsersService) {
    this.defaultStreem();
  }

  defaultStreem(){
      this.streem = 'bio';
  }
  olResultPage(){
      this.navCtrl.push(OlresultPage);
  }

  logUserOut(){
    this.usersService.logoutUser().then(() =>{
      this.navCtrl.setRoot(LoginPage);
    });

  }

}
