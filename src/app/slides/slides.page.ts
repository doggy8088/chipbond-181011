import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, Slides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  @ViewChild('slides') slides: Slides;
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.slides.stopAutoplay();
  }

  async next() {
    const loading = await this.loadingController.create({message: 'loading'});

    setTimeout(async() => {
      await loading.dismiss();
      this.slides.slideNext();
    }, 1000);

    await loading.present();
    // this.slides.slideNext();
  }

}
