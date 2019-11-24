import $ from "jquery";

import NewsPageView from "./views/pages/news-page.view";
import NewsPageModel from "./models/news-page.model";
import NewsPageController from "./controllers/news-page.controller";

import NewsApiService from "./services/news-api.service";

const API_KEY = "cd77286a82d24223b1320716435aacb6";

export default class App {
  async init() {
    const $mainContainer = $("#main-container");
    const view = new NewsPageView($mainContainer);

    const service = new NewsApiService(API_KEY);
    const model = new NewsPageModel(service);

    const controller = new NewsPageController(view, model);
    await controller.init();
  }
}
