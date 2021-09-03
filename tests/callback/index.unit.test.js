import { calc, sum, printDate, date } from "../../src/callback";
describe("Test suite for callback", () => {
  test("Should return the total sum between two numbers", () => {
    const expectedResult = 4;

    const result = calc(2, 2, sum);

    expect(result).toBe(expectedResult);
  });

  test("Should return the current date", () => {
    const mockDate = new Date('2021-09-02T23:03:56.797Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
    
    const result = date(printDate);

    expect(result).toBe(mockDate);
  });
});
