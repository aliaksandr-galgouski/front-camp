import $ from "jquery";
import View from "./../base.view";
import NewsListView from "./../elements/news-list-view/news-list.view";
import SourceListView from "./../elements/source-list-view/source-list.view";

export default class NewsPageView extends View {
  render(model) {
    const $newsContainer = $(`<div class="col-lg-8 col-xl-9"></div>`);
    const $sourcesContainer = $(`<div class="col-lg-4 col-xl-3"></div>`);

    this.newsListView = new NewsListView($newsContainer);
    this.sourcesListView = new SourceListView($sourcesContainer);

    model.on("newsLoaded", () => this.newsListView.render(model.news));
    model.on("sourcesLoaded", () => this.sourcesListView.render(model.sources));

    $(`<div class="row"></div>`)
      .append($sourcesContainer)
      .append($newsContainer)
      .appendTo(this.$parent);
  }
}
