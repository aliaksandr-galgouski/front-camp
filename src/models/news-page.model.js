import EventEmiter from "events";

export default class NewsPageModel extends EventEmiter {
  constructor(apiService) {
    super();
    this.apiService = apiService;
    this.sources = [];
    this.news = [];
  }

  async init() {
    this.on("sourceIdChanged", event => this.loadNews(event));

    await this.loadSources();

    if (this.sourceId) {
      this.loadNews();
    }
  }

  async loadSources() {
    this.sources = await this.apiService.getSources();
    super.emit("sourcesLoaded");

    if (!this.sourceId) {
      this.sourceId = this.sources.length && this.sources[0].id;
    }
  }
  async loadNews() {
    this.news = await this.apiService.getNews(this.sourceId);
    super.emit("newsLoaded");
  }

  get sourceId() {
    const hash = window.location.hash;
    return hash.length && hash.substr(1);
  }
  set sourceId(value) {
    if (this.sourceId == value) return;

    if (this.sources.some(source => source.id === value)) {
      window.location.hash = value;
      super.emit("sourceIdChanged", value);
    }
  }
}
