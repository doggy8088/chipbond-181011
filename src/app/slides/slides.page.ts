import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  @ViewChild('slides') slides: Slides;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

}
