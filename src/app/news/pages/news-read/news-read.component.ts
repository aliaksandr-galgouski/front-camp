import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../shared/News';
import { NewsService } from '../../shared/news.service';
import { NewsSource } from '../../shared/news-source';

@Component({
  templateUrl: './news-read.component.html',
  styleUrls: ['./news-read.component.scss']
})
export class NewsReadComponent implements OnInit {
  news: News = null;
  source: NewsSource;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.news = await this.newsService.getNewsById(id);

    const sourceId = this.news.sourceId;
    this.source = await this.newsService.getSourceById(sourceId);
  }

  onEdit(id) {
    this.router.navigate(['/news', id, 'edit']);
    console.log('Edit', id);
  }
  onDelete(id) {
    console.log('Delete', id);
  }
}
