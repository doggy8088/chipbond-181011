import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SchedulePage } from './schedule/schedule.page';
import { SpeakersPage } from './speakers/speakers.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        component: SchedulePage,
        outlet: 'schedule'
      },
      {
        path: 'speakers',
        component: SpeakersPage,
        outlet: 'speakers'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage, SchedulePage, SpeakersPage]
})
export class TabsPageModule {}
