import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss']
})
export class PickerPage implements OnInit {
  constructor(private pickerController: PickerController) {}

  ngOnInit() {}

  async showPicker() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'OK',
          handler: (value) => console.log(value)
        },
        {
          text: 'Cacnel',
          handler: () => {}
        }
      ],
      columns: [
        {
          name: 'from',
          selectedIndex: 1,
          suffix: '$',
          options: [
            { text: 'USD', value: 'usd' },
            { text: 'EUR', value: 'eur' },
            { text: 'NTD', value: 'ntd' }
          ]
        },
        {
          name: 'to',
          selectedIndex: 1,
          suffix: '$',
          options: [
            { text: 'USD', value: 'usd' },
            { text: 'EUR', value: 'eur' },
            { text: 'NTD', value: 'ntd' }
          ]
        }
      ]
    });

    await picker.present();

    const result = await picker.onWillDismiss();
    console.log(result);
  }
}
