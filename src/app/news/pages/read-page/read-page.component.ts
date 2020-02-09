import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Router, ActivatedRoute } from '@angular/router';
//import { NewsService } from '../../services/news.service';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})
export class ReadPageComponent implements OnInit {
  article: Article;
  subHeaderText: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsApiService
  ) {}

  async ngOnInit() {
    const params = this.route.snapshot.params;

    if (params.id) {
      this.article = await this.newsService.getArticleById(Number(params.id));
      this.subHeaderText = this.article.source
        ? this.article.source.name
        : 'Mine Article';
    }
  }

  onEdit(id: number) {
    this.router.navigate(['news', this.article.id, 'edit']);
  }

  async onDelete(id: number) {
    try {
      await this.newsService.deleteArticle(id);
      this.router.navigate(['news']);
    } catch (error) {
      console.error(error);
    }
  }
}
