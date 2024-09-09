/**
 * This is an in-place implementation
 */
export function selection_sort(nums: number[]) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      let current = nums[i];
      if (current > nums[j]) {
        nums[i] = nums[j];
        nums[j] = current;
      }
    }
  }
  return nums;
}
