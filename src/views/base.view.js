import EventEmiter from "events";

export default class View extends EventEmiter {
  constructor($parent) {
    super();
    this.$parent = $parent;
  }

  render(model) {}
  clearParent() {
    this.$parent.html(String.empty);
  }
}
