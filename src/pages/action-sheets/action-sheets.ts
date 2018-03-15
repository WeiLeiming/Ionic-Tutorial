import { Component } from '@angular/core';

import { ActionSheetController, Platform } from 'ionic-angular';

@Component({
  selector: 'action-sheets-basic-page',
  templateUrl: 'action-sheets.html'
})

export class ActionSheetsPage {

  constructor(public actionSheetCtrl: ActionSheetController, public platform: Platform) {
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
