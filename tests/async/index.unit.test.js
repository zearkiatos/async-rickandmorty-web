import { doSomethingAsync } from "../../src/async";
describe("Test suite for async/await", () => {
  test("Should return a data message of resolved promise", async () => {
    const expectedResult = "Do Somethin Async";

    const result = await doSomethingAsync();

    expect(result).toBe(expectedResult);
  });

  test("Should return a data message of rejected promise", async () => {
    const expectedResult = "Test Error";

    const result = await doSomethingAsync(false);

    expect(result.message).toBe(expectedResult);
  });
})