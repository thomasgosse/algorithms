import { expect, test } from "vitest";
import { selection_sort } from "./selection-sort";

test.each([[[2, 0, 2, 1, 1, 0]], [[2, 0, 1]]])("selection_sort", (nums) => {
  expect(selection_sort(nums)).toStrictEqual(nums.sort((a, b) => a - b));
});
