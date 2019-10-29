import { ApiService, RequestOptions } from "./base.service";
import { NewsArticle, NewsSource } from "../models/news";

const BaseApiUrl = "https://newsapi.org/v1";

export default class NewsApiService extends ApiService {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }

  async getSources() {
    let url = `${BaseApiUrl}/sources`;
    let resonse = await this._handleErrors(super.get(url, this._getRequestOptions()));

    if(resonse && resonse.sources){
      return resonse.sources.map(source => new NewsSource(source));
    }

    return [];
  }

  async getArticles(sourceCode, sortBy) {
    let url = `${BaseApiUrl}/articles?source=${sourceCode}&sortBy=${sortBy || "latest"}`;    
    let resonse = await this._handleErrors(super.get(url, this._getRequestOptions()));

    if(resonse && resonse.articles){
      return resonse.articles.map(article => new NewsArticle(article));
    }

    return [];
  }

  async _handleErrors(request) {
    let body = await request;

    if (body.status === "error") {
      console.error('NewsApiService', body.message);      
    }

    return body;
  }

  _getRequestOptions() {
    let options = new RequestOptions();
    if (this.apiKey) {
      options.setHeader("X-Api-Key", this.apiKey);
    }
    return options;
  }
}
