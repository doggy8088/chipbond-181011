import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Spinner } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  @ViewChild('spinner')
  spinner: Spinner;

  form = new FormGroup({
    name: new FormControl('Mike'),
    interest: new FormControl([]),
    notify: new FormControl(true),
    car: new FormControl(),
    age: new FormControl(34)
  });

  constructor() { }

  ngOnInit() {
  }

  

  pause() {
    console.log(this.form.value);
    this.spinner.paused = !this.spinner.paused;
  }

  change(event) {
    console.log(event);
  }

}
