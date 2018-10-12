import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PullToRefreshPage } from './pull-to-refresh.page';

const routes: Routes = [
  {
    path: '',
    component: PullToRefreshPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PullToRefreshPage]
})
export class PullToRefreshPageModule {}
