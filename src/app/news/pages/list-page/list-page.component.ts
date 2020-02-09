import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy
} from '@angular/core';
import { Article } from '../../models/article';
import { ArticleSource } from '../../models/article-source';
import { ArticleComponent } from '../../components/article/article.component';
import { NewsApiService } from '../../services/news-api.service';
//import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  pageSize = 4;
  articles: Article[] = [];
  sources: ArticleSource[] = [];

  filter = '';
  selectedSource: ArticleSource = null;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  articlesContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private newsService: NewsApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadSources();
  }

  async loadSources() {
    this.sources = await this.newsService.getSources();
    this.onSourceChanged(this.sources[0]);
  }

  async onSourceChanged(source: ArticleSource) {
    if (this.selectedSource === source) {
      return;
    }
    this.selectedSource = source;

    this.filter = '';
    this.articles = await this.loadArticles(0);
    this.renderArticles();
  }

  async onFilterChanged(filter: string) {
    if (this.filter === filter) {
      return;
    }

    this.filter = filter;
    if (this.filter && this.filter.length) {
      this.articles = await this.loadArticles(0);
      this.renderArticles();
    } else {
      this.articles = await this.loadArticles(0);
      this.renderArticles();
    }
  }

  async loadArticles(page: number) {
    return this.newsService.getArticles(
      this.selectedSource.id,
      this.filter,
      page,
      this.pageSize
    );
  }

  async onLoadMore() {
    const nextPage = Math.floor(this.articles.length / this.pageSize) + 1;
    const newArticles = await this.loadArticles(nextPage);
    this.articles = this.articles.concat(newArticles);
    this.renderArticles();
  }

  onAddArticle() {
    this.router.navigate(['news', 'create']);
  }

  onEdit(id: number) {
    this.router.navigate(['news', id, 'edit']);
  }

  async onDelete(id: number) {
    try {
      await this.newsService.deleteArticle(id);
      this.articles = await this.loadArticles(0);
      this.renderArticles();
    } catch (error) {
      console.error(error);
    }
  }

  onReadMore(id: number) {
    this.router.navigate(['news', id, 'read']);
  }

  renderArticles() {
    const factory = this.resolver.resolveComponentFactory(ArticleComponent);
    this.articlesContainer.clear();
    for (const article of this.articles) {
      const articleComponent = this.articlesContainer.createComponent(factory);
      const instance = articleComponent.instance;

      instance.article = article;
      instance.editable = !!article.id;
      instance.displayType = 'short';

      const sub = instance.readMore
        .subscribe(() => this.onReadMore(article.id))
        .add(instance.edit.subscribe(() => this.onEdit(article.id)))
        .add(instance.delete.subscribe(() => this.onDelete(article.id)));

      articleComponent.onDestroy(() => {
        sub.unsubscribe();
      });
    }
  }
}
