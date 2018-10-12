import { Component, OnInit } from '@angular/core';
import { Refresher } from '@ionic/angular';

@Component({
  selector: 'app-pull-to-refresh',
  templateUrl: './pull-to-refresh.page.html',
  styleUrls: ['./pull-to-refresh.page.scss']
})
export class PullToRefreshPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  pullRefresh(event) {
    // 重新整理資料
    setTimeout(() => {
      (event.target as Refresher).complete();
    }, 1000);
  }
}
