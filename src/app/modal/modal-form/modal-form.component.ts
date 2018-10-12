import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  @Input() defaultAccount = '';

  form = {
    account: '',
    password: ''
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.form.account = this.defaultAccount;
  }

  login() {
    this.modalController.dismiss(this.form);
  }
}
