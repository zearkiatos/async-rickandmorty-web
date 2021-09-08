import { getFirstCharacter } from "../../src/async/httpAsync";
import httpHelper from '../../src/utils/httpHelper';
import CharacterResponseBuilder from '../builders/characterResponseBuilder';
import CharacterResultBuilder from '../builders/characterResultBuilder';
import LocationBuilder from '../builders/locationBuilder';
describe("Test suite httpAsync", () => {
  test("Should return a first character of Rick and Morty Api", async () => {
    const expectedResult = {
        count: 1,
        name: 'Rick Sanchez',
        dimension: 'Dimension C-137'
    };
    const characterResponseMock = new CharacterResponseBuilder().build();
    const characterResultMock = new CharacterResultBuilder().build();
    const LocationMock = new LocationBuilder().build();
    jest.spyOn(httpHelper, 'fetchData')
        .mockImplementationOnce(() => new Promise((resolve) => resolve(characterResponseMock)))
        .mockImplementationOnce(() => new Promise((resolve) => resolve(characterResultMock)))
        .mockImplementationOnce(() => new Promise((resolve) => resolve(LocationMock)));

    const result = await getFirstCharacter();

    expect(result).toEqual(expectedResult);
  });
});