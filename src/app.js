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

    const articles = await this.service.getArticles(this.sourceId);

    this.populateElement("sources-list", sources, this.createSourceHtml);
    this.populateElement("articles-list", articles, this.createArticleHtml);
  }

  getQueryStringValue(parameter) {
    const params = new URL(document.location).searchParams;
    return params.get(parameter) || String.empty;
  }

  populateElement(elementId, models, contentFactory) {
    const element = document.getElementById(elementId);
    element.innerHTML = String.empty;

    if (Array.isArray(models) && contentFactory) {
      models.forEach(model => {
        const html = contentFactory.call(this, model);
        element.innerHTML += html;
      });
    }
  }

  createSourceHtml(source) {
    const isActive = source.id == this.sourceId ? "active" : String.empty;
    return `
      <a href="./?sourceId=${source.id}" class="list-group-item list-group-item-action ${isActive}">
        ${source.name}
        <span class="badge badge-secondary badge-pill">${source.language}</span>        
      </a>`;
  }

  createArticleHtml(article) {
    const date = new Date(article.publishedAt).toLocaleDateString();
    return `
      <div class="card">
        <img class="bd-placeholder-img card-img-top" src="${article.urlToImage}"/>
        <div class="card-body">
          <h5 class="card-title"><a href='${article.url}'>${article.title}</a></h5>
          <p class="card-text">${article.description}</p>
          <p class="card-text"><small class="text-muted"></small></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated ${date}</small>
        </div>
      </div>`;
  }
}
