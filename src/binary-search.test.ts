import { expect, test } from "vitest";
import { binary_search } from "./binary-search";

test.each([
  [[1, 4, 8, 10, 14, 123], 3, null],
  [[-1, 0, 3, 5, 9, 12], 13, null],
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[1, 4, 8, 10, 14, 123], 8, 2],
  [[-1, 9, 15, 21, 39], -1, 0],
  [[-38, 17, 22, 23, 29, 30], 23, 3],
  [[-38, 17, 22, 23, 29], 22, 2],
])("binary_search(%o,%i) -> %i", (nums, target, result) => {
  expect(binary_search(nums, target)).toBe(result);
});
