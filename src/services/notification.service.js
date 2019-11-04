import "bootstrap/js/dist/alert";
import $ from "jquery";

export default class NotificationService {
  constructor() {
    this.$body = $("#main-container");
  }

  showError(message) {
    const html = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error:</strong> ${message.toString()}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;

    this.$body.append(html);
  }
}
NotificationService.instance = new NotificationService();
