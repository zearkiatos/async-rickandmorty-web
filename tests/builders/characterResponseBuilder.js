import BaseBuilder from "./baseBuilder";
import CharacterResultBuilder from "./characterResultBuilder";
import InfoBuilder from "./infoBuilder";

class CharacterResponseBuilder extends BaseBuilder {
  constructor() {
    super();
    this.info = new InfoBuilder()
        .withCount(1)
        .withNext(0)
        .build();
    this.results = [new CharacterResultBuilder().build()];
  }
  withInfo(info) {
    this.info = info;
    return this;
  }

  withResults(results) {
    this.results = results;
    return this;
  }
}

export default CharacterResponseBuilder;
