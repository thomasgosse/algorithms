import { expect, test } from "vitest";
import { euclidean, find_gcd } from "./gcd";

test.each([
  [[21, 15], 3],
  [[1680, 640], 80],
  [[50, 50], 50],
])("euclidean(%o,%i) -> %i", (nums, result) => {
  expect(euclidean(nums[0], nums[1])).toBe(result);
});

test.each([
  [[2, 5, 6, 9, 10], 1],
  [[50, 50, 100, 200], 50],
])("find_gcd(%o,%i) -> %i", (nums, result) => {
  expect(find_gcd(nums)).toBe(result);
});
