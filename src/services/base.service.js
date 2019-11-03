export class ApiService {
  async get(url, options) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return await response.json();
    } catch (e) {
      console.error(e.message);
    }
  }
}

export class RequestOptions {
  constructor() {
    this.headers = {};
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }
}
