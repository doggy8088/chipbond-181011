import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  image = '';
  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  take() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
    })
    .then(dataUrl => {
      this.image = `data:image/jpeg;base64,${dataUrl}`;
    });
  }
}
