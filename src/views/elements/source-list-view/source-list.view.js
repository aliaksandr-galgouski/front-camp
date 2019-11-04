import $ from "jquery";
import ListView from "../base.list.view";
import "./source-list.view.css";

export default class SourceListView extends ListView {
  constructor(itemView) {
    super(itemView);
  }

  createContainer(model) {
    return $(`<ul class="list-group"></ul>`);
  }

  createItem(model) {
    return $(`
      <li class="list-group-item">        
        <span>${model.name}</span>
        <span class="badge badge-secondary">${model.language}</span>
      </li>`).attr("id", model.id);
  }
}
