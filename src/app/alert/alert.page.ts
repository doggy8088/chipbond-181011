import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Hello',
      subHeader: 'World',
      message: 'Hi~~'
    });
    alert.present();
  }

  async showConfirm() {
    const alert = await this.alertController.create({
      message: 'hi',
      buttons: [
        {
          text: 'OK',
          handler: () => console.log('ok')
        },
        {
          text: 'Button',
          handler: () => console.log('ok')
        },
        {
          text: 'Cancel',
          handler: () => console.log('Cancel')
        }
      ]
    });
    alert.present();
  }

  async showInput() {
    const alert = await this.alertController.create({
      message: 'Your Passwrod',
      buttons: [
        {
          text: 'OK',
          handler: () => console.log('ok')
        }
      ],
      inputs: [
        {
          name: 'password',
          type: 'password',
          value: '123456'
        }
      ]
    });
    await alert.present();
    const result = await alert.onWillDismiss();
    console.log(result);
  }
}
