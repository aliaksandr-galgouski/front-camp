import $ from "jquery";
import ListView from "../base.list.view";
import "./source-list.view.css";

export default class SourceListView extends ListView {
  createContainer(model) {
    return $(`<ul class="list-group"></ul>`);
  }

  createItem(model) {
    return $(`
      <li id="${model.id}" class="list-group-item">        
        <span>${model.name}</span>
        <span class="badge badge-secondary">${model.language}</span>
      </li>`);
  }
}
