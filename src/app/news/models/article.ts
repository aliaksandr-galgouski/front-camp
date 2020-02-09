import { ArticleSource } from './article-source';

export interface Article {
  title: string;
  content: string;
  source: ArticleSource;

  id?: number;
  url?: string;

  author?: string;
  urlToImage?: string;
  description?: string;
  publishedAt?: Date | string;
}
