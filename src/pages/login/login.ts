import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userData: any = {
    account: '',
    password: ''
  };

  constructor(public navCtrl: NavController) {
  }

  loginBtnClicked() {
    console.log(this.userData)
  }

}
