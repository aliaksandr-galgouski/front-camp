import { Injectable } from '@angular/core';
import { News } from './News';
import { NewsSource } from './news-source';
import { Observable, of } from 'rxjs';

const NEWS: News[] = [
  {
    id: 0,
    sourceId: 0,
    heading: 'News 1',
    author: 'Me',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 1,
    sourceId: 1,
    heading: 'News 2',
    author: 'The Kitty',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 2,
    sourceId: 1,
    heading: 'News 3',
    author: 'The Kitty',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 3,
    sourceId: 1,
    heading: 'News 4',
    author: 'The Dog',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 4,
    sourceId: 2,
    heading: 'News 5',
    author: 'The Dog',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 5,
    sourceId: 2,
    heading: 'News 6',
    author: 'The Dog',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  },
  {
    id: 6,
    sourceId: 2,
    heading: 'News 7',
    author: 'The Dog',
    date: new Date(),
    shortDiscription: 'Some Text',
    content: 'Full text',
    imageUrl: './'
  }
];

const SOURCES: NewsSource[] = [
  { id: 0, name: 'Mine Source 1', isMine: true },
  { id: 1, name: 'Mine Source 2', isMine: true },
  { id: 2, name: 'Source 1' }
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() {}

  getNews(): Promise<News[]> {
    return Promise.resolve(NEWS);
  }

  getNewsBySourceId(sourceId): Observable<News[]> {
    return of(NEWS.filter(n => n.sourceId === sourceId));
  }

  getNewsById(id: number): Promise<News> {
    const news = NEWS.find(n => n.id === id);
    if (news) {
      return Promise.resolve(news);
    }

    return Promise.reject();
  }

  getSources(): Observable<NewsSource[]> {
    return of(SOURCES);
  }

  getSourceById(id: any): Promise<NewsSource> {
    const news = SOURCES.find(s => s.id === id);
    if (news) {
      return Promise.resolve(news);
    }

    return Promise.reject();
  }
}
