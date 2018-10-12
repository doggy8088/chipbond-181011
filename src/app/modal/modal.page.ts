import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormComponent } from './modal-form/modal-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async login() {
    const modal = await this.modalController.create({
      component: ModalFormComponent,
      componentProps: { defaultAccount: 'mike' }
    });

    await modal.present();

    const loginData = await modal.onWillDismiss();
    console.log(loginData);
  }
}
