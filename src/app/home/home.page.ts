import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Spinner } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('spinner')
  spinner: Spinner;

  form = new FormGroup({
    name: new FormControl('Mike'),
    interest: new FormControl([]),
    notify: new FormControl(true),
    car: new FormControl(),
    age: new FormControl(34)
  });

  pause() {
    console.log(this.form.value);
    this.spinner.paused = !this.spinner.paused;
  }

  change(event) {
    console.log(event);
  }
}
