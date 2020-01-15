import { Component, OnInit } from "@angular/core";

import { News } from "src/app/models/news";
import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  constructor(private newsService: NewsApiService) {

  }

  newsList: News[];

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsList = this.newsService.getNews();
  }

  deleteNews(news) {
    this.newsService.deleteNews(news.id);    
  }
}
