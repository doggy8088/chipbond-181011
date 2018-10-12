import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss']
})
export class ReorderPage implements OnInit {
  list = [1, 3, 5, 7, 9];
  reorder(event) {
    console.log(event.detail);
  }

  constructor() {}

  ngOnInit() {}
}
