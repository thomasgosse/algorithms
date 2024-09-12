export function recursive_sum(nums: number[]): number {
  const first = nums.shift();
  if (first === undefined) return 0;
  return first + recursive_sum(nums);
}
