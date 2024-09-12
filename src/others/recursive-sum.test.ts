import { expect, test } from "vitest";
import { recursive_sum } from "./recursive-sum";

test.each([
  [[2, 4, 6], 12],
  [[-1, 0, 3, 5, 9, 12], 28],
])("recursive_sum(%o,%i) -> %i", (nums, result) => {
  expect(recursive_sum(nums)).toBe(result);
});
