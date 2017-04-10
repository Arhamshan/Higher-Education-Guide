import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {OlresultPage} from '../olresult/olresult';
@Component({
  selector: 'page-streem',
  templateUrl: 'streem.html'
})
export class StreemPage {
    streem:any;

  constructor(public navCtrl: NavController) {
    this.defaultStreem();
  }

  defaultStreem(){
      this.streem = 'bio';
  }
  olResultPage(){
      this.navCtrl.push(OlresultPage);
  }

}
