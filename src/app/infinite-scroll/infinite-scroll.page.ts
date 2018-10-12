import { Component, OnInit } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {
  list = [];
  page = 1;
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 100; ++i) {
      this.list.push(i);
    }
  }

  loadMore(event) {
    setTimeout(() => {
      const length = this.list.length;
      for (let i = 0; i < 100; ++i) {
        this.list.push(length + i);
      }
      (event.target as InfiniteScroll).complete();
    }, 1000);
  }
}
