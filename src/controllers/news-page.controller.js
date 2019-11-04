import $ from "jquery";

export default class NewsPageController {
  constructor(newsView, newsModel) {
    this.view = newsView;
    this.model = newsModel;
  }

  async init() {
    this.view.render(this.model);    
    this.view.sourcesListView.on("itemClicked", e => this.onSourceClick(e));

    await this.model.init();
  }

  onSourceClick(element) {
    this.model.sourceId = element.id;
  }
}
