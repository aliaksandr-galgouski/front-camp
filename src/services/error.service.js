import NotificationServoce from "./notification.service";

export default class ErrorService {
  handle(error) {
    const message = error.message || error.toString();
    if (message && message.length) {
      NotificationServoce.showError(message);
    } else {
      console.error(error);
    }
  }
}
