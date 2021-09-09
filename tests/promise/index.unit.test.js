import promiseFunctions from "../../src/promise";
describe("Test suite for promise functions", () => {
  test("Should return a success message if the request is successful", async () => {
    const expectedResult = "Hey! its okey ✅";

    const result = await promiseFunctions
      .somethingWillHappen()
      .then((response) => response);

    expect(result).toBe(expectedResult);
  });

  test("Should return a an error message if the request is unsuccessful", async () => {
    const expectedResult = "Error Boom! 💣 💥";

    const result = await promiseFunctions
      .somethingWillHappen(false)
      .then((response) => console.log(response))
      .catch((error) => error);

    expect(result).toBe(expectedResult);
  });

  test("Should return with a timeout a success message if the request is successful", async () => {
    const expectedResult = "Hey! its okey ✅";

    const result = await promiseFunctions
      .somethingWillHappenTwo()
      .then((response) => response);

    expect(result).toBe(expectedResult);
  });

  test("Should return a an error object with a message if the request is unsuccessful", async () => {
    const expectedResult = "Error Boom! 💣 💥";

    const result = await promiseFunctions
      .somethingWillHappenTwo(false)
      .then((response) => console.log(response))
      .catch((error) => error);

    expect(result.message).toBe(expectedResult);
  });

  test("Should resolve all promise function", async () => {
    const expectedResult = "Hey! its okey ✅";

    Promise.all([
      promiseFunctions.somethingWillHappen(),
      promiseFunctions.somethingWillHappenTwo(),
    ]).then((response) => {
      expect(response[0]).toBe(expectedResult);
      expect(response[1]).toBe(expectedResult);
    });
  });
});
