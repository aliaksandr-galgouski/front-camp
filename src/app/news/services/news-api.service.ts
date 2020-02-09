import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article';
import { ArticleSource } from '../models/article-source';

const API_KEY = 'cd77286a82d24223b1320716435aacb6';

type ResponseStatus = 'ok' | 'error' | string;
interface IApiResponse {
  status: ResponseStatus;
}

interface SourceResponse extends IApiResponse {
  sources: ArticleSource[];
}

interface ArticleResponse extends IApiResponse {
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  localArticles: Article[] = [];

  createOrUpdateArticle(article: Article) {
    if (article.id) {
    }
  }
  deleteArticle(id: number) {
    throw new Error('Method not implemented.');
  }
  getArticleById(id: number): Article | PromiseLike<Article> {
    const article = this.localArticles.find(a => a.id === id);
    return Promise.resolve(article);
  }
  apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  /**
   * getSources
   */
  public getSources(): Promise<ArticleSource[]> {
    const params = new HttpParams().set('apiKey', API_KEY);

    return this.http
      .get<SourceResponse>(`${this.apiUrl}/sources`, { params })
      .pipe(map(response => response.sources))
      .toPromise();
  }

  /**
   * getArticles
   */
  public getArticles(
    source: string,
    q: string,
    page: number,
    pageSize: number
  ): Promise<Article[]> {
    const params = new HttpParams()
      .set('apiKey', API_KEY)
      .set('sources', source)
      .set('q', q)
      .set('page', String(page))
      .set('pageSize', String(pageSize));

    return this.http
      .get<ArticleResponse>(`${this.apiUrl}/top-headlines`, { params })
      .pipe(map(response => response.articles))
      .toPromise();
  }
}
