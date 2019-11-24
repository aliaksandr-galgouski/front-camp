export default class NewsPageController {
  constructor(newsView, newsModel) {
    this.view = newsView;
    this.model = newsModel;
  }

  async init() {
    this.view.render(this.model);
    this.view.sourcesListView.on("itemClicked", event =>
      this.onSourceClick(event)
    );

    await this.model.init();
  }

  onSourceClick(event) {
    this.model.sourceId = event.currentTarget.id;
  }
}
