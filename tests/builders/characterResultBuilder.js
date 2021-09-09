import BaseBuilder from "./baseBuilder";
import PlaceBuilder from "./placeBuilder";

class CharacterResultBuilder extends BaseBuilder {
  constructor() {
    super();
    this.id = 1;
    this.name = "Rick Sanchez";
    this.status = "Alive";
    this.species = "Human";
    this.type = "";
    this.gender = "Male";
    this.origin = new PlaceBuilder().build();
    this.location = new PlaceBuilder()
      .withName("Earth (Replacement Dimension)")
      .withUrl("https://rickandmortyapi.com/api/location/20")
      .build();
    this.image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    this.episode = [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
    ];
    this.url = "https://rickandmortyapi.com/api/character/1";
    this.created = "2017-11-04T18:48:46.250Z";
  }

  withId(id) {
    this.id = id;
    return this;
  }
  withName(name) {
    this.name = name;
    return this;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  withSpecies(species) {
    this.species = species;
    return this;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  withGender(gender) {
    this.gender = gender;
    return this;
  }

  withOrigin(origin) {
    this.origin = origin;
    return this;
  }

  withLocation(location) {
    this.location = location;
    return this;
  }

  withImage(image) {
    this.image = image;
    return this;
  }

  withEpisode(episode) {
    this.episode = episode;
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

export default CharacterResultBuilder;
