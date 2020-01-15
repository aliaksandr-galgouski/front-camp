import { Injectable } from "@angular/core";
import { News } from "../models/news";


const MOCK_NEWS: News[] = [
  { 
    id: 1, 
    title: "News Title #1", 
    date: Date.now().toString(), 
    shortLines: "Some click-bait lines extracted from the news content.", 
    fullText: "The full text of the news article bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla."
  },
  { 
    id: 2, 
    title: "News Title #2", 
    date: Date.now().toString(), 
    shortLines: "Some click-bait lines extracted from the news content.", 
    fullText: "The full text of the news article bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla."
  },
  { 
    id: 3, 
    title: "News Title #3", 
    date: Date.now().toString(), 
    shortLines: "Some click-bait lines extracted from the news content.", 
    fullText: "The full text of the news article bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla."
  },
  { 
    id: 4, 
    title: "News Title #4", 
    date: Date.now().toString(), 
    shortLines: "Some click-bait lines extracted from the news content.", 
    fullText: "The full text of the news article bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla bla-bla-bla."
  }
]

@Injectable({
  providedIn: "root",
})
export class NewsApiService {

  constructor() { }

  getNews(): News[] {
    return MOCK_NEWS;
  }

  deleteNews(id: number) {
    MOCK_NEWS.splice(MOCK_NEWS.findIndex(news => news.id === id), 1)
  }

}