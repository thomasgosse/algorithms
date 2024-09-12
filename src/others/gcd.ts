export function euclidean(a: number, b: number): number {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  const rest = max % min;
  if (rest === 0) return min;
  return euclidean(rest, min);
}

export function find_gcd(nums: number[]): number {
  const a = nums.shift();
  const b = nums.shift();
  const gcd = euclidean(a, b);
  if (nums.length === 0) return gcd;
  return find_gcd([gcd, ...nums]);
}
