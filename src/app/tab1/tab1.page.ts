import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './../services/api.service'

import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  results: Observable<any>;
  information = null;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private apiService:ApiService
  ) {
    this.initializeApp();
  }

  
  initializeApp() {
  }

  async clickTest(){
    let result = await this.apiService.getProducts()
    console.log(result)
    // .subscribe(result => {

    //   this.information = result;
    //   console.log(result)
    // }, err => {
    //   console.log("error")
    //   console.log(err)
    // }, ()=> {
    //   console.log("complete")
    // });
  }


}
