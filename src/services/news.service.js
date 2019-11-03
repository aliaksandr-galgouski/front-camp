import { ApiService, RequestOptions } from "./base.service";

const BASE_URL = "https://newsapi.org/v1";
const ERROR_STATUS = "error";

export default class NewsApiService extends ApiService {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }

  async getSources() {
    const url = `${BASE_URL}/sources`;
    let responseBody = await super.get(url, this._createRequestOptions());
    responseBody = this._handleServerErrors(responseBody);

    return (responseBody && responseBody.sources) || [];
  }

  async getArticles(sourceCode, sortBy) {
    sortBy = sortBy || "latest";

    const url = `${BASE_URL}/articles?source=${sourceCode}&sortBy=${sortBy}`;
    let responseBody = await super.get(url, this._createRequestOptions());
    responseBody = this._handleServerErrors(responseBody);

    return (responseBody && responseBody.articles) || [];
  }

  _handleServerErrors(body) {
    if (body && body.status === ERROR_STATUS) {
      console.error("NewsApiService", body.message);
    }

    return body;
  }

  _createRequestOptions() {
    let options = new RequestOptions();

    if (this.apiKey) {
      options.setHeader("X-Api-Key", this.apiKey);
    }

    return options;
  }
}
