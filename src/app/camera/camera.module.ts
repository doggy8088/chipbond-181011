import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { CameraPage } from './camera.page';




const routes: Routes = [
  {
    path: '',
    component: CameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [Camera],
  declarations: [CameraPage]
})
export class CameraPageModule {}
