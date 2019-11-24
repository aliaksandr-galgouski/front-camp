import "bootstrap/js/dist/alert";
import $ from "jquery";

class NotificationService {
  constructor() {
    this.$body = $("body");
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

export default new NotificationService();
