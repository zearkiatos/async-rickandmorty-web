import { getCharacters, getCharacter, getLocation } from "../../src/promise/httpPromise";
import CharacterResponseBuilder from "../builders/characterResponseBuilder";
import CharacterResultBuilder from "../builders/characterResultBuilder";
import InfoBuilder from '../builders/infoBuilder';
import LocationBuilder from "../builders/locationBuilder";
const httpHelper = require('../../src/utils/httpHelper').default;
describe("Test suite for http promise", () => {
  test("Should get a id from one of the characters of rick and morty", async () => {
    const mockResponse = new CharacterResponseBuilder().build();
    jest.spyOn(httpHelper, 'fetchData').mockImplementation(() => new Promise((resolve) => resolve(mockResponse)));
    
    const result = await getCharacters();

    expect(result).toEqual(mockResponse);
    expect(result.info).toBe(mockResponse.info);
  });

  test("Should get a specific character", async () => {
    const mockResponse = new CharacterResponseBuilder()
      .withInfo(new InfoBuilder()
      .withCount(2)
      .build())
      .withResults([new CharacterResultBuilder().build(), new CharacterResultBuilder()
        .withId(2)
        .withName('Morty Smith')
        .build()])
      .build();
    jest.spyOn(httpHelper, 'fetchData').mockImplementation(() => new Promise((resolve) => resolve(mockResponse.results[1])));

    const result = await getCharacter(2);

    expect(result).toEqual(mockResponse.results[1]);
    expect(result.name).toBe(mockResponse.results[1].name);
  });

  test("Should the details of a locations in the world of Rick and Morty", async () => {
    const mockResponse = new LocationBuilder().build();
    jest.spyOn(httpHelper, 'fetchData').mockImplementation(() => new Promise((resolve) => resolve(mockResponse)));

    const result = await getLocation('https://rickandmortyapi.com/api/location/1');

    expect(result).toEqual(mockResponse);
    expect(result.dimension).toBe(mockResponse.dimension);
  });
});