import { Component, OnInit } from '@angular/core';
import { News } from '../../shared/News';

@Component({
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {
  news: any;

  constructor() {}

  ngOnInit() {
    this.news = {};
  }

  onSave(formValue) {
    console.log('Saved', formValue);
  }

  onCancel() {
    console.log('Canceled');
  }
}
