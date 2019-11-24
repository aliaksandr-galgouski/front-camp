import Http from "./http.factory";

const BASE_URL = "https://newsapi.org/v1";
const ERROR_STATUS = "error";

function createHeaders(apiKey) {
  return {
    "X-Api-Key": apiKey
  };
}

async function handleErrors(request) {
  try {
    const response = await request;
    if (response.status !== 200) {
      throw Error(json.statusMessage);
    }

    const json = await response.json();

    if (json.status === ERROR_STATUS) {
      throw Error(json.message);
    }

    return json;
  } catch (error) {
    const lazyModule = await import(
      /* webpackChunkName: "error.service" */ "./error.service"
    );
    const errorService = new lazyModule.default();
    errorService.handle(error.message);
  }
}

export default class NewsApiService {
  constructor(apiKey) {
    this.headers = createHeaders(apiKey);
  }

  async getSources() {
    const url = `${BASE_URL}/sources`;
    const request = Http.get(url, this.headers);
    const json = await handleErrors(request);

    return (json && json.sources) || [];
  }

  async getNews(sourceId, sortBy) {
    sortBy = sortBy || "latest";

    const url = `${BASE_URL}/articles?source=${sourceId}&sortBy=${sortBy}`;
    const request = Http.get(url, this.headers);
    const json = await handleErrors(request);

    return (json && json.articles) || [];
  }
}
