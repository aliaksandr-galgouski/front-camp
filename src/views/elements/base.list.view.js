import $ from "jquery";
import View from "../base.view";

export default class ListView extends View {
  render(model = []) {
    this.clearParent();
    const $container = this.createContainer(model);

    $container.on("click", "> *", event => this.emit("itemClicked", event));

    model.forEach(itemModel => this.renderItem($container, itemModel));

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
