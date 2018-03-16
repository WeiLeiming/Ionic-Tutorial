import { Component } from '@angular/core';

import { NavController, ActionSheetController, Platform } from 'ionic-angular';

import { HelloIonicPage } from "../hello-ionic/hello-ionic";

@Component({
  selector: 'page-action-sheets-basic',
  templateUrl: 'action-sheets.html'
})

export class ActionSheetsPage {

  data:any = [
    {name:'托尼·史塔克', birthYear:1970, gender:1, description:'钢铁侠'},
    {name:'史蒂夫·罗杰斯', birthYear:1920, gender:1, description:'美国队长'},
    {name:'娜塔莎罗·曼诺夫', birthYear:1928, gender:0, description:'黑寡妇'},
    {name:'索尔', birthYear:-5555,gender:1, description:'雷神'},
    {name:'克林顿·巴顿', birthYear:1974, gender:1, description:'鹰眼'},
    {name:'布鲁斯·班纳', birthYear:1975, gender:1, description:'绿巨人浩克'}
  ];

  name: string

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public platform: Platform) {
  }

  pushNextPage() {
    this.navCtrl.push(HelloIonicPage)
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Albums",
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Destructive clicked')
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    })
    actionSheet.present()
  }

}
