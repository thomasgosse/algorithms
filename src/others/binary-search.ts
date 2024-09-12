export function binary_search(nums: number[], target: number): number | null {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = Math.round((end + start) / 2);
    if (target > nums[middle]) {
      start = middle + 1;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else if (nums[middle] === target) {
      return middle;
    }
  }

  return nums[start] === target ? start : null;
}
