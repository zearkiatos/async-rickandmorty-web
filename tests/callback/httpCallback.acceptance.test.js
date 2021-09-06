import httpCallback from "../../src/callback/httpCallback";
import CharacterResponseBuilder from "../builders/characterResponseBuilder";
const config = require("../../src/config").default;
describe("Test suite for http callback", () => {
  test("Should get a id from one of the characters of rick and morty", async () => {
    const mockResponse = new CharacterResponseBuilder().build();
    
    httpCallback.fetchData(
      `${config.RICKANDMORTY_API_BASE_URL}/character`,
      function (error, data) {
        if (error) console.error(error);
        expect(mockResponse.results[0].id).toBe(data.results[0].id);
        expect(data.info.count).toBe(671);
      }
    );
  });

  test("Should get a origin object from one of the characters of rick and morty", async () => {
    const mockResponse = new CharacterResponseBuilder().build();
    
    httpCallback.fetchData(
      mockResponse.results[0].origin.url,
      function (error, data) {
        if (error) console.error(error);
        expect(data.name).toBe('Earth (C-137)');
        expect(data.dimension).toBe('Dimension C-137');
      }
    );
  });
});
