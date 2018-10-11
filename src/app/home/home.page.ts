import { Component, ViewChild } from '@angular/core';
import { Spinner } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('spinner') spinner: Spinner;

  pause() {
    this.spinner.paused = !this.spinner.paused;
  }
}
