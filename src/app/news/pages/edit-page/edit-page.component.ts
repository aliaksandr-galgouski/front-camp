import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Router, ActivatedRoute } from '@angular/router';
//import { NewsService } from '../../services/news.service';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  article: Article;
  articleId: any;
  subHeaderText: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsApiService
  ) {}

  async ngOnInit() {
    const params = this.route.snapshot.params;
    this.articleId = params.id;

    if (this.articleId) {
      this.article = await this.newsService.getArticleById(
        Number(this.articleId)
      );
      this.subHeaderText = 'Edit';
    } else {
      this.article = {
        title: 'Article',
        content: 'Text',
        source: { id: 1, name: 'Source 1' },
        publishedAt: new Date()
      };
      this.subHeaderText = 'Create';
    }
  }

  onCancel() {
    this.router.navigate(['news']);
  }

  async onSubmit(values: any) {
    try {
      const article = <Article>values;
      const id = await this.newsService.createOrUpdateArticle(article);

      this.router.navigate(['news', id, 'read']);
    } catch (error) {
      console.error(error);
    }
  }
}
