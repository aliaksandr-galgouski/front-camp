import EventEmiter from "events";

export default class NewsPageModel extends EventEmiter {
  constructor(apiService) {
    super();
    this.apiService = apiService;
    this.sources = [];
    this.news = [];
  }

  async init() {
    this.on("sourceIdChanged", () => this.loadNews());

    await this.loadSources();
    if (this.sourceId) {
      this.loadNews();
    }
  }

  async loadSources() {
    const sources = await this.apiService.getSources();

    const sourceId = this.sourceId || (sources.length && sources[0].id);
    this.sources = sources.map(source => {
      source.isActive = sourceId === source.id;
      return source;
    });

    this.sourceId = sourceId;

    super.emit("sourcesLoaded");
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
      window.location.hash = `#${value}`;
      super.emit("sourceIdChanged", value);
    }    
  }
}
