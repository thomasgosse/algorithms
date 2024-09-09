import { expect, test } from "vitest";
import { quicksort } from "./quicksort";
import { numbers } from "./data";

test.each([[[2, 0, 2, 1, 1, 0]], [[2, 0, 1]], [[5, 1, 1, 2, 0, 0]], [[5, 2, 3, 1]], [numbers]])("quicksort", (nums) => {
  expect(quicksort(nums)).toStrictEqual(nums.sort((a, b) => a - b));
});
