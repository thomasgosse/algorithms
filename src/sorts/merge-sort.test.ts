import { expect, test } from "vitest";
import { merge, merge_sort } from "./merge-sort";
import { numbers, samesNumbers } from "./data";

test.each([[[2, 0, 2, 1, 1, 0]], [[2, 0, 1]], [[5, 1, 1, 2, 0, 0]], [[5, 2, 3, 1]], [numbers], [samesNumbers]])(
  "merge_sort",
  (nums) => {
    expect(merge_sort(nums)).toStrictEqual(nums.sort((a, b) => a - b));
  }
);

/**
 * Left and right arrays should be sorted
 */
test.each([
  [[2], [1], [1, 2]],
  [
    [2, 7],
    [0, 1, 5],
    [0, 1, 2, 5, 7],
  ],
])("merge", (left, right, result) => {
  expect(merge(left, right)).toStrictEqual(result);
});
