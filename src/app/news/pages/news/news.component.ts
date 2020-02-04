import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../shared/News';
import { NewsService } from '../../shared/news.service';
import { NewsSource } from '../../shared/news-source';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList$: Observable<News[]>;
  sourses$: Observable<NewsSource[]>;

  selectedSource: NewsSource;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    this.sourses$ = this.newsService.getSources();
  }

  loadNews(sourceId: number) {
    this.newsList$ = this.newsService.getNewsBySourceId(sourceId);
  }

  onSourceChanged(source: NewsSource) {
    console.log('Source Changed', source.name);
    this.selectedSource = source;
    this.newsList$ = this.newsService.getNewsBySourceId(source.id);
  }

  onFilterChanged(filter: string) {
    console.log('Filter Changed', filter);
  }

  onAddNews() {
    this.router.navigate(['/news', 'create']);
  }

  onReadMore(id) {
    console.log('Read More', id);
    this.router.navigate(['/news', id]);
  }

  onEdit(id) {
    console.log('Edit', id);
    this.router.navigate(['/news', id, 'edit']);
  }
  onDelete(id) {
    console.log('Delete', id);
  }
}
