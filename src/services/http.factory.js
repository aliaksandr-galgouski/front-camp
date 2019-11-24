import TraceInterceptor from "../interceptors/trace.interceptor";

const DEFAULT_HEADERS = {
  Accept: "application/json"
};

function doRequest(method, url, headers, body) {
  const init = {};
  init.url = url;
  init.body = body;
  init.method = method;
  init.headers = { ...DEFAULT_HEADERS, ...headers };

  return fetch(url, init);
}

class Http {
  static get(url, headers) {
    return doRequest("GET", url, headers, null);
  }
  static delete(url, headers) {
    return doRequest("DELETE", url, headers, null);
  }

  static put(url, headers, body) {
    return doRequest("PUT", url, headers, body);
  }
  static post(url, headers, body) {
    return doRequest("POST", url, headers, body);
  }
}

export default TraceInterceptor(Http);
