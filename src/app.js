import NewsApiService from "./services/news.service";

const API_KEY = "cd77286a82d24223b1320716435aacb6";

export default class App {
  constructor() {
    this.service = new NewsApiService(API_KEY);
  }

  async init() {
    this.sourceId = this.getQueryStringValue("sourceId");

    let sources = await this.service.getSources();    
    if (!this.sourceId.length && sources.length) {
      this.sourceId = sources[0].id;
    }

    let articles = await this.service.getArticles(this.sourceId);

    this.populateElement("sourcesList", sources, this.createSourceHtml);
    this.populateElement("articlesList", articles, this.createArticleHtml);    
  }

  getQueryStringValue(parameter) {
    let params = new URL(document.location).searchParams;
    return params.get(parameter) || "";
  }

  populateElement(elementId, models, contentFactory) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";

    if (Array.isArray(models) && contentFactory) {
      models.forEach(model => element.innerHTML += contentFactory.call(this, model));
    }
  }

  createSourceHtml(source) {
    let active = source.id == this.sourceId ? "active" : "";
    return `
      <a href="./?sourceId=${source.id}" class="list-group-item list-group-item-action ${active}">
        ${source.name}
        <span class="badge badge-secondary badge-pill">${source.language}</span>        
      </a>`;
  }

  createArticleHtml(article) {
    return `
      <div class="card">
        <img class="bd-placeholder-img card-img-top" src="${
          article.urlToImage
        }"/>
        <div class="card-body">
          <h5 class="card-title"><a href='${article.url}'>${
      article.title
    }</a></h5>
          <p class="card-text">${article.description}</p>
          <p class="card-text"><small class="text-muted"></small></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated ${article.publishedAt.toLocaleDateString()}</small>
        </div>
      </div>`;
  }
}
