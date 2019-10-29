export class NewsSource {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.country = data.country;
    this.language = data.language;
  }
}

export class NewsArticle {
  constructor(data) {
    this.author = data.author;
    this.title = data.title;
    this.description = data.description;
    this.url = data.url;
    this.urlToImage = data.urlToImage;
    this.publishedAt = new Date(data.publishedAt);
  }
}


