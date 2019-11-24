import $ from "jquery";
import ListView from "../base.list.view";

export default class NewsListView extends ListView {
  createContainer(model) {
    return $(`<div class="card-columns"></div>`);
  }

  createItem(model) {
    const date = new Date(model.publishedAt).toLocaleDateString();
    return $(`
      <div class="card">
        <img class="bd-placeholder-img card-img-top" src="${model.urlToImage}"/>
        <div class="card-body">
          <h5 class="card-title"><a href="${model.url}">${model.title}</a></h5>
          <p class="card-text">
            <small class="text-muted">${model.description}</small>
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated ${date}</small>
        </div>
      </div>`);
  }
}
