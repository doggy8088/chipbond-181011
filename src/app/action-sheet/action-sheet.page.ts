import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss']
})
export class ActionSheetPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Hello',
      subHeader: 'World',
      buttons: [
        {
          text: 'Save',
          icon: 'save',
          handler: () => console.log('save')
        },
        {
          text: 'Edit',
          icon: 'create',
          role: 'selected'
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
    const action = await actionSheet.onWillDismiss();
  }
}
