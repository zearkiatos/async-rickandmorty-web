import BaseBuilder from "./baseBuilder";

class PlaceBuilder extends BaseBuilder {
  constructor() {
    super();
    this.name = "Earth (C-137)";
    this.url = "https://rickandmortyapi.com/api/location/1";
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withUrl(url) {
    this.url = url;
    return this;
  }
}

export default PlaceBuilder;
