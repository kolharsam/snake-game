import { isEqual, diff } from "./";

test("[1,2,3,4,5,6] and [1,2,3,4,5,6] are equal", () => {
  expect(isEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(true);
});

test("diff between [2,3,4,5,6] and [1,1,1,1,1] is [1,2,3,4,5]", () => {
  expect(diff([2, 3, 4, 5, 6], [1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
