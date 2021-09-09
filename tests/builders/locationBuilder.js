import BaseBuilder from "./baseBuilder";

class LocationBuilder extends BaseBuilder {
  constructor() {
    super();
    this.id = 1;
    this.name = "Earth (C-137)";
    this.type = "Planet";
    this.dimension = "Dimension C-137";
    this.residents = [
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/45",
      "https://rickandmortyapi.com/api/character/71",
      "https://rickandmortyapi.com/api/character/82",
      "https://rickandmortyapi.com/api/character/83",
      "https://rickandmortyapi.com/api/character/92",
      "https://rickandmortyapi.com/api/character/112",
      "https://rickandmortyapi.com/api/character/114",
      "https://rickandmortyapi.com/api/character/116",
      "https://rickandmortyapi.com/api/character/117",
      "https://rickandmortyapi.com/api/character/120",
      "https://rickandmortyapi.com/api/character/127",
      "https://rickandmortyapi.com/api/character/155",
      "https://rickandmortyapi.com/api/character/169",
      "https://rickandmortyapi.com/api/character/175",
      "https://rickandmortyapi.com/api/character/179",
      "https://rickandmortyapi.com/api/character/186",
      "https://rickandmortyapi.com/api/character/201",
      "https://rickandmortyapi.com/api/character/216",
      "https://rickandmortyapi.com/api/character/239",
      "https://rickandmortyapi.com/api/character/271",
      "https://rickandmortyapi.com/api/character/302",
      "https://rickandmortyapi.com/api/character/303",
      "https://rickandmortyapi.com/api/character/338",
      "https://rickandmortyapi.com/api/character/343",
      "https://rickandmortyapi.com/api/character/356",
      "https://rickandmortyapi.com/api/character/394",
    ];
    this.url = "https://rickandmortyapi.com/api/location/1";
    this.created = "2017-11-10T12:42:04.162Z";
  }
  withId(id) {
    this.id = id;
    return this;
  }
  withName(name) {
    this.name = name;
    return this;
  }
  withType(type) {
    this.type = type;
    return this;
  }
  withDimension(dimension) {
    this.dimension = dimension;
    return this;
  }
  withResidents(residents) {
    this.residents = residents;
    return this;
  }
  withUrl(url) {
    this.url = url;
    return this;
  }
  withCreated(created) {
    this.created = created;
    return this;
  }
}

export default LocationBuilder;
