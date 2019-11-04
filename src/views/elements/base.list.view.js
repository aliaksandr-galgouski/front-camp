import $ from "jquery";
import View from "../base.view";

export default class ListView extends View {
  constructor($parent) {
    super($parent);
  }

  render(model) {
    this.clearParent();
    const $container = this.createContainer(model);

    $container.on(
      "click",
      "> *",
      function(e) {
        this.emit("itemClicked", e.currentTarget);
      }.bind(this)
    );

    (model || []).forEach(itemModel => this.renderItem($container, itemModel));

    this.$parent.append($container);
  }

  renderItem($container, model) {
    const $item = this.createItem(model);

    if (this.itemView) {
      this.itemView.render($item, model);
    } else {
      super.render($item, model);
    }

    if (model.isActive) {
      $item.addClass("active");
    }

    $container.append($item);
  }

  createContainer(model) {
    return $(`<ul></ul>`);
  }

  createItem(model) {
    return $(`<li>${model}</li>`);
  }
}
