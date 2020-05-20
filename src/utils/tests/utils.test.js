import { isEqual, diff, isValidCell, bitMe, isValidKeyPress } from "..";

test("[1,2,3,4,5,6] and [1,2,3,4,5,6] are equal", () => {
  expect(isEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(true);
});

test("diff between [2,3,4,5,6] and [1,1,1,1,1] is [1,2,3,4,5]", () => {
  expect(diff([2, 3, 4, 5, 6], [1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("[4,5] is a valid cell in a grid with 30 cells in a row", () => {
  expect(isValidCell([4, 5], 30)).toBe(true);
});

test("[4,5] is present within [[4,5], [4,5], [3,5]], hence the snake bit itself", () => {
  expect(
    bitMe([
      [4, 5],
      [4, 5],
      [3, 5],
    ])
  ).toBe(true);
});

test("39 is valid keyCode in isValidKeyPress", () => {
  expect(isValidKeyPress(39)).toBe(true);
});
