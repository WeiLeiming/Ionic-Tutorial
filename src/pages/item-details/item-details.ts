import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionsheetCtrl: ActionSheetController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  presentActionSheet() {
    let buttons = [
      {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },
      {
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked')
        }
      }
    ];
    let actionSheet = this.actionsheetCtrl.create({title: 'leiming', buttons: buttons});
    actionSheet.present();
  }

}
