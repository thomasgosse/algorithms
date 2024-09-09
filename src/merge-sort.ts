export function merge_sort(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex);

  const m1 = merge_sort(left);
  const m2 = merge_sort(right);
  return merge(m1, m2);
}

export function merge(left: number[], right: number[]) {
  let sorted = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted.concat(left.slice(i), right.slice(j));
}

/**
 * I find this version more readable, but less fast according to tests
 */
// function merge(left: number[], right: number[]): number[] {
//   const sorted: number[] = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sorted.push(left.shift());
//     } else {
//       sorted.push(right.shift());
//     }
//   }

//   return sorted.concat(left, right);
// }
