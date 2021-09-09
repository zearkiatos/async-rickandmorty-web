import BaseBuilder from "./baseBuilder";

class InfoBuilder extends BaseBuilder {
  constructor() {
    super();
    this.count = 671;
    this.pages = 34;
    this.next = "https://rickandmortyapi.com/api/character?page=2";
    this.prev = null;
  }

  withCount(count) {
    this.count = count;
    return this;
  }

  withPages(pages) {
    this.pages = pages;
    return this;
  }

  withNext(next) {
    this.next = next;
    return this;
  }

  withPrev(prev) {
    this.prev = prev;
    return this;
  }
}

export default InfoBuilder;
