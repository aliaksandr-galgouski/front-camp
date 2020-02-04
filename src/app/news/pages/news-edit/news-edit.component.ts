import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../shared/News';

@Component({
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {
  news: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.news = await this.newsService.getNewsById(id);
  }

  onSave(formValue) {
    console.log('Saved', formValue);
  }

  onCancel() {
    console.log('Canceled');
  }
}
