export function quicksort(nums: number[]): number[] {
  if (nums.length < 2) return nums;
  const index = Math.round((nums.length - 1) * Math.random());
  const pivot = nums[index];
  const less = [];
  const greater = [];
  for (let i = 0; i < nums.length; i++) {
    if (i !== index) nums[i] > pivot ? greater.push(nums[i]) : less.push(nums[i]);
  }
  return quicksort(less).concat([pivot], quicksort(greater));
}
